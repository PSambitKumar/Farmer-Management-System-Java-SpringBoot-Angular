package com.sambit.Model;

import javax.persistence.*;

/**
 * @Project : FarmersRegistration
 * @Auther : Sambit Kumar Pradhan
 * @Created On : 05/09/2022 - 1:41 PM
 */

@Entity
@Table
public class AadharDocument {
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int aadharDocId;
	private String aadharDocPath;

	public int getAadharDocId() {
		return aadharDocId;
	}

	public void setAadharDocId(int aadharDocId) {
		this.aadharDocId = aadharDocId;
	}

	public String getAadharDocPath() {
		return aadharDocPath;
	}

	public void setAadharDocPath(String aadharDocPath) {
		this.aadharDocPath = aadharDocPath;
	}

	@Override
	public String toString() {
		return "AadharDocument{" +
			   "aadharDocId=" + aadharDocId +
			   ", aadharDocPath='" + aadharDocPath + '\'' +
			   '}';
	}
}
