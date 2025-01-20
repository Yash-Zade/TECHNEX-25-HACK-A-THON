package com.teamarc.leaflink.repository;

import com.teamarc.leaflink.entity.ChatRoom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<ChatRoom, Long> {
}
