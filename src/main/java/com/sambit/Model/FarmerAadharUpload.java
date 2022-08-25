package com.sambit.Model;

import javax.persistence.*;

@Entity
@Table
public class FarmerAadharUpload {
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int farmerAadharId;
	@Column
	private String farmerName;
	@Column
	private String aadharDocUploadPath;
	@ManyToOne
	@JoinColumn(name = "farmerId")
	private Farmer farmerId;

	public int getFarmerAadharId() {
		return farmerAadharId;
	}

	public void setFarmerAadharId(int farmerAadharId) {
		this.farmerAadharId = farmerAadharId;
	}

	public String getFarmerName() {
		return farmerName;
	}

	public void setFarmerName(String farmerName) {
		this.farmerName = farmerName;
	}

	public String getAadharDocUploadPath() {
		return aadharDocUploadPath;
	}

	public void setAadharDocUploadPath(String aadharDocUploadPath) {
		this.aadharDocUploadPath = aadharDocUploadPath;
	}

	public Farmer getFarmerId() {
		return farmerId;
	}

	public void setFarmerId(Farmer farmerId) {
		this.farmerId = farmerId;
	}

	@Override
	public String toString() {
		return "FarmerAadharUpload{" +
			   "farmerAadharId=" + farmerAadharId +
			   ", farmerName='" + farmerName + '\'' +
			   ", aadharDocUploadPath='" + aadharDocUploadPath + '\'' +
			   ", farmerId=" + farmerId +
			   '}';
	}
}
