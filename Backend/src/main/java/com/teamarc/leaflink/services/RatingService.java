package com.teamarc.leaflink.services;


import com.teamarc.leaflink.dto.EmailRequest;
import com.teamarc.leaflink.dto.MentorProfileDTO;
import com.teamarc.leaflink.dto.RatingDTO;
import com.teamarc.leaflink.entity.Mentor;
import com.teamarc.leaflink.entity.Rating;
import com.teamarc.leaflink.entity.Session;
import com.teamarc.leaflink.exceptions.ResourceNotFoundException;
import com.teamarc.leaflink.exceptions.RuntimeConflictException;
import com.teamarc.leaflink.repository.MentorRepository;
import com.teamarc.leaflink.repository.RatingRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RatingService {

    private final RatingRepository ratingRepository;
    private final MentorRepository mentorRepository;
    private final ModelMapper modelMapper;


    public MentorProfileDTO rateMentor(RatingDTO ratingDTO) {
        Mentor mentor = ratingDTO.getSession().getMentor();
        Rating ratingObj = ratingRepository.findBySession(ratingDTO.getSession())
                .orElseThrow(() -> new ResourceNotFoundException("Rating not found for session with id: " + ratingDTO.getSession().getSessionId()));
        if (ratingObj.getRatingValue() != null) throw new RuntimeConflictException("Mentor is already rated");
        ratingObj.setRatingValue(ratingDTO.getRatingValue());
        ratingObj.setComment(ratingDTO.getComment());
        ratingRepository.save(ratingObj);

        Double newRating = ratingRepository.findByMentor(mentor)
                .stream()
                .mapToDouble(Rating::getRatingValue)
                .average().orElse(0.0);
        mentor.setAverageRating(newRating);
        mentor.getRatings().add(ratingObj);
        Mentor savedMentor = mentorRepository.save(mentor);

        EmailRequest emailRequest = EmailRequest.builder()
                .toEmail(savedMentor.getUser().getEmail())
                .subject("New Rating")
                .body("You have received a new rating")
                .buttonText("View")
                .buttonUrl("https://your-site.com/ratings")
                .build();

        return modelMapper.map(savedMentor, MentorProfileDTO.class);
    }


    public void creatNewRating(Session session) {
        Rating rating = Rating.builder()
                .session(session)
                .mentor(session.getMentor())
                .applicant(session.getApplicant())
                .build();

        ratingRepository.save(rating);
    }

    public Page<RatingDTO> getRatings(Integer pageOffset, Integer pageSize) {
        return ratingRepository.findAll(PageRequest.of(pageOffset, pageSize))
                .map(rating -> modelMapper.map(rating, RatingDTO.class));
    }
}
