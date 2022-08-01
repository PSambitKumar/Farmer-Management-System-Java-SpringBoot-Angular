package com.sambit.ServiceImpl;

import com.sambit.Model.*;
import com.sambit.Repository.*;
import com.sambit.Service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MainServiceImpl implements MainService {

    @Autowired
    private BankRepository bankRepository;
    @Autowired
    private FarmerRepository farmerRepository;
    @Autowired
    private JanadhaarRepository janadhaarRepository;
    @Autowired
    private AadharRepository aadharRepository;
    @Autowired
    private AcknowledgeRepository acknowledgeRepository;
    @Autowired
    private RelationRepository relationRepository;


    @Override
    public List<Farmer> findAllFarmersList() {
        return farmerRepository.findAll();
    }

    @Override
    public Bank saveBank(Bank bank) {
        return bankRepository.saveAndFlush(bank);
    }

    @Override
    public Acknowledge saveAcknowledge(Acknowledge acknowledge) {
        return acknowledgeRepository.saveAndFlush(acknowledge);
    }

    @Override
    public Janadhaar saveJanAdhaar(Janadhaar janAdhaar) {
        return janadhaarRepository.saveAndFlush(janAdhaar);
    }

    @Override
    public Aadhar saveAadhar(Aadhar aadhar) {
        return aadharRepository.saveAndFlush(aadhar);
    }

    @Override
    public Farmer saveFarmer(Farmer farmer) {
        return farmerRepository.saveAndFlush(farmer);
    }

    @Override
    public Farmer findFarmerByAckId(String ackId) {
        return farmerRepository.findFarmerByAcknowledge_AcknowledgeId(ackId);
    }

    @Override
    public Farmer findFarmerByJanadhaar(String janadharId) {
        return farmerRepository.findFarmerByJanAdhaar_JanadhaarId(janadharId);
    }

    @Override
    public Farmer findFarmerByAadhar(String aadharId) {
        return farmerRepository.findFarmerByAadhar_AadharId(aadharId);
    }

    @Override
    public Farmer findFarmerById(int id) {
        return farmerRepository.findFarmerById(id);
    }

    @Override
    public List<Bank> findAllBankList() {
        return bankRepository.findAll();
    }

    @Override
    public List<Relation> findAllRelationList() {
        return relationRepository.findAll();
    }


}
