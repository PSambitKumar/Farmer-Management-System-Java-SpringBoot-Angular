package com.sambit.ServiceImpl;

import com.sambit.Bean.FarmerBean;
import com.sambit.Dao.FarmerRegistrationDaoAngular;
import com.sambit.Model.*;
import com.sambit.Service.MainServiceAngular;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.transaction.Transactional;
import java.util.Collection;
import java.util.List;

@Service
public class MainServiceImplAngular implements MainServiceAngular {

	@Autowired
	private FarmerRegistrationDaoAngular farmerRegistrationDaoAngular;

	@Override
	public Farmer createFarmer(FarmerBean farmerBean) {
		Farmer farmer;
		Farmer saveFarmer;
		Bank bank = null;
		Aadhar aadhar;
		Janadhaar janadhaar;
		Acknowledge acknowledge;
		if (farmerBean.getId() == 0){
			try {
				bank = new Bank();
				bank.setBankName(farmerBean.getBank());
				bank.setAccountNumber(farmerBean.getAccountNumber());
				bank.setMobileNumber(farmerBean.getMobile());
				bank.setIfscCode(farmerBean.getIfscCode());
				Bank savedBank = farmerRegistrationDaoAngular.saveBank(bank);

				farmer = new Farmer();
				farmer.setId(farmerBean.getId());
				farmer.setName(farmerBean.getName());
				farmer.setFathersName(farmerBean.getFathersName());
				farmer.setAge(Integer.parseInt(farmerBean.getAge()));
				farmer.setGender(farmerBean.getGender());
				farmer.setRelation(farmerBean.getRelation());
				farmer.setMobile(farmerBean.getMobile());
				farmer.setBank(savedBank);

				int uniqueId = Integer.parseInt(farmerBean.getUniqueId());
				if (uniqueId == 1){
					System.out.println("Ack Id Recieved. " + farmerBean.getAcknowledge());
					acknowledge = new Acknowledge();
					acknowledge.setAcknowledgeId(farmerBean.getAcknowledge());
					Acknowledge savedAcknowledge = farmerRegistrationDaoAngular.saveAcknowledge(acknowledge);
					farmer.setAcknowledge(savedAcknowledge);
				} else if (uniqueId == 2){
					System.out.println("Janadhaar Id Recieved. " + farmerBean.getJanAdhaar());
					janadhaar = new Janadhaar();
					janadhaar.setJanadhaarId(farmerBean.getJanAdhaar());
					Janadhaar savedJanadhaar = farmerRegistrationDaoAngular.saveJanadhaar(janadhaar);
					farmer.setJanAdhaar(savedJanadhaar);
				} else if (uniqueId == 3){
					System.out.println("Adhaar Id Recieved. " + farmerBean.getAadhar());
					aadhar = new Aadhar();
					aadhar.setAadharId(farmerBean.getAadhar());
					Aadhar savedAadhar = farmerRegistrationDaoAngular.saveAadhar(aadhar);
					farmer.setAadhar(savedAadhar);
				} else {
					System.out.println("Something Went Wrong!!");
				}
			} catch (NumberFormatException e) {
				throw new RuntimeException(e);
			}
			System.out.println("Final Farmer Data : " + farmer);
			saveFarmer = farmerRegistrationDaoAngular.saveFarmer(farmer);
			System.out.println("Data After Insertion to Database : " + saveFarmer);
		}else {
			farmer = farmerRegistrationDaoAngular.getFarmerById(farmerBean.getId());
//			Updating Bank
			if (farmer.getBank() != null){
				bank = farmer.getBank();
				bank.setBankName(farmerBean.getBank());
				bank.setIfscCode(farmerBean.getIfscCode());
				bank.setMobileNumber(farmerBean.getMobile());
				bank.setAccountNumber(farmerBean.getAccountNumber());
			}
			
			if (farmer.getJanAdhaar() != null){
				janadhaar = farmer.getJanAdhaar();
			}else {
				janadhaar = new Janadhaar();
			}
			if (farmer.getAadhar() != null){
				aadhar = farmer.getAadhar();
			}else {
				aadhar = new Aadhar();
			}
			if (farmer.getAcknowledge() != null){
				acknowledge = farmer.getAcknowledge();
			}else {
				acknowledge = new Acknowledge();
			}

			if (Integer.parseInt(farmerBean.getUniqueId()) == 1){
				System.out.println("Ack Id Recieved. " + farmerBean.getAcknowledge());
				acknowledge.setAcknowledgeId(farmerBean.getAcknowledge());
				Acknowledge savedAcknowledge = farmerRegistrationDaoAngular.saveAcknowledge(acknowledge);
				farmer.setAcknowledge(savedAcknowledge);
			} else if (Integer.parseInt(farmerBean.getUniqueId()) == 2){
				System.out.println("Janadhaar Id Recieved. " + farmerBean.getJanAdhaar());
				janadhaar.setJanadhaarId(farmerBean.getJanAdhaar());
				Janadhaar savedJanadhaar = farmerRegistrationDaoAngular.saveJanadhaar(janadhaar);
				farmer.setJanAdhaar(savedJanadhaar);
			} else if (Integer.parseInt(farmerBean.getUniqueId()) == 3){
				System.out.println("Adhaar Id Recieved. " + farmerBean.getAadhar());
				aadhar.setAadharId(farmerBean.getAadhar());
				Aadhar savedAadhar = farmerRegistrationDaoAngular.saveAadhar(aadhar);
				farmer.setAadhar(savedAadhar);
			}
			
			farmer.setName(farmerBean.getName());
			farmer.setFathersName(farmerBean.getFathersName());
			farmer.setAge(Integer.parseInt(farmerBean.getAge()));
			farmer.setGender(farmerBean.getGender());
			farmer.setRelation(farmerBean.getRelation());
			farmer.setMobile(farmerBean.getMobile());
			farmer.setBank(bank);
			System.out.println("Final Farmer Data : " + farmer);
			saveFarmer = farmerRegistrationDaoAngular.updateFarmer(farmer);
			System.out.println("Data After Update to Database : " + saveFarmer);
		}
		return saveFarmer;
	}

	@Override
	public List<Farmer> getFarmerList() {
		return farmerRegistrationDaoAngular.findAllFarmerList();
	}

	@Override
	public String deleteFarmerById(int id) {
		return farmerRegistrationDaoAngular.deleteFarmerById(id);
	}

	@Override
	public Farmer getFarmerById(int id) {
		return farmerRegistrationDaoAngular.getFarmerById(id);
	}

	@Override
	public Farmer saveRelationUsingFarmerId(int farmerId, Relation relation) {
		Farmer farmer = farmerRegistrationDaoAngular.getFarmerById(farmerId);
		Bank bank = farmerRegistrationDaoAngular.saveBank(relation.getBank());
		relation.setBank(bank);
		Relation relation1 = farmerRegistrationDaoAngular.saveRelation(relation);
		List<Relation> relationList = farmer.getRelationList();
		relationList.add(relation1);
		farmer.setRelationList(relationList);
		System.out.println("Final Data For Save Farmer : " + farmer);
		return farmerRegistrationDaoAngular.updateFarmer(farmer);
	}

	@Override
	public FarmerImage createFarmerImage(FarmerImage farmerImage) {
		return farmerRegistrationDaoAngular.saveFarmerImage(farmerImage);
	}

	@Override
	public List<FarmerImage> getFarmerImageList() {
		return farmerRegistrationDaoAngular.getFarmerImageList();
	}
}
