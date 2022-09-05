package com.sambit.Dao;

import com.sambit.Model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

@Repository
public class FarmerRegistrationDaoImplAngular implements FarmerRegistrationDaoAngular{

	@Autowired
	private EntityManager entityManager;

	@Override
	@Transactional
	public List<Farmer> findAllFarmerList() {
		return entityManager.createQuery("SELECT f FROM Farmer f", Farmer.class).getResultList();
	}

//	This is Also Working and also without @Override	@Transactional
//	public Collection<FarmerBean> findAllFarmerList() {
//		Query query = entityManager.createQuery("SELECT f FROM FarmerBean f");
//		return (Collection<FarmerBean>) query.getResultList();
//	}

	@Override
	@Transactional
	public Bank saveBank(Bank bank) {
		entityManager.persist(bank);
		return bank;
	}

	@Override
	@Transactional
	public Acknowledge saveAcknowledge(Acknowledge acknowledge) {
		entityManager.persist(acknowledge);
		return acknowledge;
	}

	@Override
	@Transactional
	public Janadhaar saveJanadhaar(Janadhaar janadhaar) {
		entityManager.persist(janadhaar);
		return janadhaar;
	}

	@Override
	@Transactional
	public Aadhar saveAadhar(Aadhar aadhar) {
		entityManager.persist(aadhar);
		return aadhar;
	}

	@Override
	@Transactional
	public Farmer saveFarmer(Farmer farmer) {
		entityManager.persist(farmer);
		return farmer;
	}

	@Transactional
	@Override
	public Farmer updateFarmer(Farmer farmer) {
		return entityManager.merge(farmer);
	}

	@Override
	@Transactional
	public String deleteFarmerById(int id) {
		String response = null;
		Farmer farmer = entityManager.find(Farmer.class, id);
		System.out.println("Farmer By Id : " + farmer);
		if (farmer != null){
			entityManager.remove(farmer);
			response = "Success";
		}else {
			response = "Fail";
		}
		List<Farmer> farmerList = entityManager.createQuery("SELECT farmer FROM Farmer farmer", Farmer.class).getResultList();
		System.out.println("New Farmer List : " + farmerList);
		return response;
	}

	@Override
	public Farmer getFarmerById(int id) {
		return entityManager.find(Farmer.class, id);
	}

	@Transactional
	@Override
	public Relation saveRelation(Relation relation) {
		entityManager.persist(relation);
		return relation;
	}

	@Override
	@Transactional
	public FarmerImage saveFarmerImage(FarmerImage farmerImage) {
		entityManager.persist(farmerImage);
		return farmerImage;
	}

	@Override
	public List<FarmerImage> getFarmerImageList() {
		return entityManager.createQuery("SELECT f FROM FarmerImage f", FarmerImage.class).getResultList();
	}

	@Override
	@Transactional
	public Farmer getAadharIdByFarmerId(int id) {
		Farmer farmer = (Farmer) entityManager.createQuery("SELECT f FROM Farmer f WHERE f.id=:id").setParameter("id", id).getSingleResult();
		return farmer;
	}

	@Override
	@Transactional
	public AadharDocument saveAadharDocument(AadharDocument aadharDocument) {
		entityManager.persist(aadharDocument);
		return aadharDocument;
	}

	@Override
	public AadharDocument getAadharDocumentByAadharDocId(int id) {
		AadharDocument aadharDocument = (AadharDocument) entityManager.createQuery("SELECT a FROM AadharDocument a WHERE a.aadharDocId=:id").setParameter("id", id).getSingleResult();
		return aadharDocument;
	}
}
