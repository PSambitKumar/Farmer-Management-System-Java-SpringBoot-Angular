package com.sambit.Repository;

import com.sambit.Model.Acknowledge;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AcknowledgeRepository extends JpaRepository<Acknowledge, Integer> {
}
