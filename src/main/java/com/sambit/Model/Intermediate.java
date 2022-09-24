package com.sambit.Model;

import javax.persistence.*;

/**
 * @Project : FarmersRegistration
 * @Auther : Sambit Kumar Pradhan
 * @Created On : 23/09/2022 - 1:05 PM
 */
@Entity
@Table
public class Intermediate {
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int intermediateId;
	private String intermediateBoard;
	private String intermediateCollegeName;
	private String passoutYear;
	private String percentageSecured;
	private String markSeured;
	private String totalMark;
	private String markSheetUploadPath;
	private String certificateUploadPath;

	public int getIntermediateId() {
		return intermediateId;
	}

	public void setIntermediateId(int intermediateId) {
		this.intermediateId = intermediateId;
	}

	public String getIntermediateBoard() {
		return intermediateBoard;
	}

	public void setIntermediateBoard(String intermediateBoard) {
		this.intermediateBoard = intermediateBoard;
	}

	public String getIntermediateCollegeName() {
		return intermediateCollegeName;
	}

	public void setIntermediateCollegeName(String intermediateCollegeName) {
		this.intermediateCollegeName = intermediateCollegeName;
	}

	public String getPassoutYear() {
		return passoutYear;
	}

	public void setPassoutYear(String passoutYear) {
		this.passoutYear = passoutYear;
	}

	public String getPercentageSecured() {
		return percentageSecured;
	}

	public void setPercentageSecured(String percentageSecured) {
		this.percentageSecured = percentageSecured;
	}

	public String getMarkSeured() {
		return markSeured;
	}

	public void setMarkSeured(String markSeured) {
		this.markSeured = markSeured;
	}

	public String getTotalMark() {
		return totalMark;
	}

	public void setTotalMark(String totalMark) {
		this.totalMark = totalMark;
	}

	public String getMarkSheetUploadPath() {
		return markSheetUploadPath;
	}

	public void setMarkSheetUploadPath(String markSheetUploadPath) {
		this.markSheetUploadPath = markSheetUploadPath;
	}

	public String getCertificateUploadPath() {
		return certificateUploadPath;
	}

	public void setCertificateUploadPath(String certificateUploadPath) {
		this.certificateUploadPath = certificateUploadPath;
	}

	@Override
	public String toString() {
		return "Intermediate{" +
			   "intermediateId=" + intermediateId +
			   ", intermediateBoard='" + intermediateBoard + '\'' +
			   ", intermediateCollegeName='" + intermediateCollegeName + '\'' +
			   ", passoutYear='" + passoutYear + '\'' +
			   ", percentageSecured='" + percentageSecured + '\'' +
			   ", markSeured='" + markSeured + '\'' +
			   ", totalMark='" + totalMark + '\'' +
			   ", markSheetUploadPath='" + markSheetUploadPath + '\'' +
			   ", certificateUploadPath='" + certificateUploadPath + '\'' +
			   '}';
	}
}
