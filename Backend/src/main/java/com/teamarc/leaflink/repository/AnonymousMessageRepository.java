package com.teamarc.leaflink.repository;

import com.teamarc.leaflink.dto.AnonymousMessageDTO;
import com.teamarc.leaflink.entity.AnonymousMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;


@Repository
public interface AnonymousMessageRepository extends JpaRepository<AnonymousMessage, Long> {
    List<AnonymousMessageDTO> findByForumId(Long forumId);
}
