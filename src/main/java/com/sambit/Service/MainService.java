package com.sambit.Service;

import com.sambit.Model.*;

import java.util.List;

public interface MainService {
    List<Farmer> findAllFarmersList();
    Bank saveBank(Bank bank);
    Acknowledge saveAcknowledge(Acknowledge acknowledge);
    Janadhaar saveJanAdhaar(Janadhaar janAdhaar);
    Aadhar saveAadhar(Aadhar aadhar);
    Farmer saveFarmer(Farmer farmer);
    Farmer findFarmerByAckId(String ackId);
    Farmer findFarmerByJanadhaar(String janadharId);
    Farmer findFarmerByAadhar(String aadharId);
    Farmer findFarmerById(int id);
    List<Bank> findAllBankList();
    List<Relation> findAllRelationList();

}
