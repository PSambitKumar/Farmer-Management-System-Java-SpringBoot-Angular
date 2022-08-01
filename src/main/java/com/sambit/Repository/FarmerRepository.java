package com.sambit.Repository;

import com.sambit.Model.Farmer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FarmerRepository extends JpaRepository<Farmer, Integer> {

    Farmer findFarmerByAcknowledge_AcknowledgeId(String ackId);
    Farmer findFarmerByAadhar_AadharId(String aadharId);
    Farmer findFarmerByJanAdhaar_JanadhaarId(String janadhaarId);
    Farmer findFarmerById(int id);
}
