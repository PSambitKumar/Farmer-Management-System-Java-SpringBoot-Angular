package com.sambit.Model;

import javax.persistence.*;

/**
 * @Project : FarmersRegistration
 * @Auther : Sambit Kumar Pradhan
 * @Created On : 23/09/2022 - 1:01 PM
 */
@Entity
@Table
public class Matriculation {
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int matricId;
	private String matriculationBoard;
	private String schoolName;
	private String passoutYear;
	private String percentageSecured;
	private String markSeured;
	private String totalMark;
	private String markSheetUploadPath;
	private String certificateUploadPath;

	public int getMatricId() {
		return matricId;
	}

	public void setMatricId(int matricId) {
		this.matricId = matricId;
	}

	public String getMatriculationBoard() {
		return matriculationBoard;
	}

	public void setMatriculationBoard(String matriculationBoard) {
		this.matriculationBoard = matriculationBoard;
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

	public String getSchoolName() {
		return schoolName;
	}

	public void setSchoolName(String schoolName) {
		this.schoolName = schoolName;
	}

	@Override
	public String toString() {
		return "Matriculation{" +
			   "matricId=" + matricId +
			   ", matriculationBoard='" + matriculationBoard + '\'' +
			   ", schoolName='" + schoolName + '\'' +
			   ", passoutYear='" + passoutYear + '\'' +
			   ", percentageSecured='" + percentageSecured + '\'' +
			   ", markSeured='" + markSeured + '\'' +
			   ", totalMark='" + totalMark + '\'' +
			   ", markSheetUploadPath='" + markSheetUploadPath + '\'' +
			   ", certificateUploadPath='" + certificateUploadPath + '\'' +
			   '}';
	}
}
