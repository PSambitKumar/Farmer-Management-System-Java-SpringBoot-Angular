package com.sambit.Bean;

public class FarmerBean {
	private int id;
	private String name;
	private String fathersName;
	private String age;
	private String gender;
	private String relation;
	private String mobile;
	private String bank;
	private String ifscCode;
	private String accountNumber;
	private String uniqueId;
	private String janAdhaar;
	private String acknowledge;
	private String aadhar;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getFathersName() {
		return fathersName;
	}

	public void setFathersName(String fathersName) {
		this.fathersName = fathersName;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getRelation() {
		return relation;
	}

	public void setRelation(String relation) {
		this.relation = relation;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getBank() {
		return bank;
	}

	public void setBank(String bank) {
		this.bank = bank;
	}

	public String getIfscCode() {
		return ifscCode;
	}

	public void setIfscCode(String ifscCode) {
		this.ifscCode = ifscCode;
	}

	public String getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}

	public String getUniqueId() {
		return uniqueId;
	}

	public void setUniqueId(String uniqueId) {
		this.uniqueId = uniqueId;
	}

	public String getJanAdhaar() {
		return janAdhaar;
	}

	public void setJanAdhaar(String janAdhaar) {
		this.janAdhaar = janAdhaar;
	}

	public String getAcknowledge() {
		return acknowledge;
	}

	public void setAcknowledge(String acknowledge) {
		this.acknowledge = acknowledge;
	}

	public String getAadhar() {
		return aadhar;
	}

	public void setAadhar(String aadhar) {
		this.aadhar = aadhar;
	}

	@Override
	public String toString() {
		return "FarmerBean{" +
			   "id=" + id +
			   ", name='" + name + '\'' +
			   ", fathersName='" + fathersName + '\'' +
			   ", age='" + age + '\'' +
			   ", gender='" + gender + '\'' +
			   ", relation='" + relation + '\'' +
			   ", mobile='" + mobile + '\'' +
			   ", bank='" + bank + '\'' +
			   ", ifscCode='" + ifscCode + '\'' +
			   ", accountNumber='" + accountNumber + '\'' +
			   ", uniqueId='" + uniqueId + '\'' +
			   ", janAdhaar='" + janAdhaar + '\'' +
			   ", acknowledge='" + acknowledge + '\'' +
			   ", aadhar='" + aadhar + '\'' +
			   '}';
	}
}
