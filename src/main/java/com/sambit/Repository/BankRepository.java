package com.sambit.Repository;

import com.sambit.Model.Bank;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BankRepository extends JpaRepository<Bank, Integer> {
}
