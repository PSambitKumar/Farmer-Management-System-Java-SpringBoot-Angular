package com.sambit.Service;

import com.sambit.Bean.FarmerBean;
import com.sambit.Model.Farmer;
import com.sambit.Model.FarmerImage;
import com.sambit.Model.Relation;

import java.util.Collection;
import java.util.List;

public interface MainServiceAngular {

	Farmer createFarmer(FarmerBean farmerBean);
	List<Farmer> getFarmerList();
	String deleteFarmerById(int id);
	Farmer getFarmerById(int id);
	Farmer saveRelationUsingFarmerId(int farmerId, Relation relation);
	FarmerImage createFarmerImage(FarmerImage farmerImage);
}
