package com.sambit.Dao;

import com.sambit.Model.*;

import java.util.List;

public interface FarmerRegistrationDaoAngular {

	List<Farmer> findAllFarmerList();
//	Collection<FarmerBean> findAllFarmerList();
	Bank saveBank(Bank bank);
	Acknowledge saveAcknowledge(Acknowledge acknowledge);
	Janadhaar saveJanadhaar(Janadhaar janadhaar);
	Aadhar saveAadhar(Aadhar aadhar);
	Farmer saveFarmer(Farmer farmer);
	Farmer updateFarmer(Farmer farmer);
	String deleteFarmerById(int id);
	Farmer getFarmerById(int id);
	Relation saveRelation(Relation relation);
	FarmerImage saveFarmerImage(FarmerImage farmerImage);
	List<FarmerImage> getFarmerImageList();
}
