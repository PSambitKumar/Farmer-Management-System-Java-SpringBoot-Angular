package com.sambit.Model;

import javax.persistence.*;

/**
 * @Project : FarmersRegistration
 * @Auther : Sambit Kumar Pradhan
 * @Created On : 23/09/2022 - 1:06 PM
 */
@Entity
@Table
public class Graduation {
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int graduateId;
	private String graduationBoard;
	private String graduateCollegeName;
	private String graduateUniversityName;
	private String passoutYear;
	private String percentageSecured;
	private String markSeured;
	private String totalMark;
	private String markSheetUploadPath;
	private String certificateUploadPath;

	public int getGraduateId() {
		return graduateId;
	}

	public void setGraduateId(int graduateId) {
		this.graduateId = graduateId;
	}

	public String getGraduationBoard() {
		return graduationBoard;
	}

	public void setGraduationBoard(String graduationBoard) {
		this.graduationBoard = graduationBoard;
	}

	public String getGraduateCollegeName() {
		return graduateCollegeName;
	}

	public void setGraduateCollegeName(String graduateCollegeName) {
		this.graduateCollegeName = graduateCollegeName;
	}

	public String getGraduateUniversityName() {
		return graduateUniversityName;
	}

	public void setGraduateUniversityName(String graduateUniversityName) {
		this.graduateUniversityName = graduateUniversityName;
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
		return "Graduation{" +
			   "graduateId=" + graduateId +
			   ", graduationBoard='" + graduationBoard + '\'' +
			   ", graduateCollegeName='" + graduateCollegeName + '\'' +
			   ", graduateUniversityName='" + graduateUniversityName + '\'' +
			   ", passoutYear='" + passoutYear + '\'' +
			   ", percentageSecured='" + percentageSecured + '\'' +
			   ", markSeured='" + markSeured + '\'' +
			   ", totalMark='" + totalMark + '\'' +
			   ", markSheetUploadPath='" + markSheetUploadPath + '\'' +
			   ", certificateUploadPath='" + certificateUploadPath + '\'' +
			   '}';
	}
}
