package com.teamarc.leaflink.services;



import com.teamarc.leaflink.dto.JobDTO;
import com.teamarc.leaflink.repository.JobRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class JobService {

    private final JobRepository jobRepository;
    private final ModelMapper modelMapper;


    public JobDTO getJobById(Long jobId) {
        return modelMapper.map(jobRepository.findById(jobId).orElseThrow(() -> new RuntimeException("Job not found")), JobDTO.class);
    }


    public Page<JobDTO> getAllJobs(PageRequest pageRequest) {
        return jobRepository.findAll(pageRequest).map((element) -> modelMapper.map(element, JobDTO.class));
    }
}
