package com.teamarc.leaflink.repository;


import com.teamarc.leaflink.entity.User;
import com.teamarc.leaflink.entity.enums.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    User findByRoles(Role role);

}

