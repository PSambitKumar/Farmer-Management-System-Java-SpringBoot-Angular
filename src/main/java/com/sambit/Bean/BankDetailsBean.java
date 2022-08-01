package com.sambit.Bean;

import java.util.Objects;
import java.util.function.ObjDoubleConsumer;

public class BankDetailsBean {
	private String MICR;
	private String BRANCH;
	private String ADDRESS;
	private String STATE;
	private String CONTACT;
	private boolean UPI;
	private boolean RTGS;
	private String CITY;
	private String CENTRE;
	private String DISTRICT;
	private boolean NEFT;
	private boolean IMPS;
	private String SWIFT;
	private String ISO3166;
	private String BANK;
	private String BANKCODE;
	private String IFSC;

	public String getMICR() {
		return MICR;
	}

	public void setMICR(String MICR) {
		this.MICR = MICR;
	}

	public String getBRANCH() {
		return BRANCH;
	}

	public void setBRANCH(String BRANCH) {
		this.BRANCH = BRANCH;
	}

	public String getADDRESS() {
		return ADDRESS;
	}

	public void setADDRESS(String ADDRESS) {
		this.ADDRESS = ADDRESS;
	}

	public String getSTATE() {
		return STATE;
	}

	public void setSTATE(String STATE) {
		this.STATE = STATE;
	}

	public String getCONTACT() {
		return CONTACT;
	}

	public void setCONTACT(String CONTACT) {
		this.CONTACT = CONTACT;
	}

	public boolean isUPI() {
		return UPI;
	}

	public void setUPI(boolean UPI) {
		this.UPI = UPI;
	}

	public boolean isRTGS() {
		return RTGS;
	}

	public void setRTGS(boolean RTGS) {
		this.RTGS = RTGS;
	}

	public String getCITY() {
		return CITY;
	}

	public void setCITY(String CITY) {
		this.CITY = CITY;
	}

	public String getCENTRE() {
		return CENTRE;
	}

	public void setCENTRE(String CENTRE) {
		this.CENTRE = CENTRE;
	}

	public String getDISTRICT() {
		return DISTRICT;
	}

	public void setDISTRICT(String DISTRICT) {
		this.DISTRICT = DISTRICT;
	}

	public boolean isNEFT() {
		return NEFT;
	}

	public void setNEFT(boolean NEFT) {
		this.NEFT = NEFT;
	}

	public boolean isIMPS() {
		return IMPS;
	}

	public void setIMPS(boolean IMPS) {
		this.IMPS = IMPS;
	}

	public String getSWIFT() {
		return SWIFT;
	}

	public void setSWIFT(String SWIFT) {
		this.SWIFT = SWIFT;
	}

	public String getISO3166() {
		return ISO3166;
	}

	public void setISO3166(String ISO3166) {
		this.ISO3166 = ISO3166;
	}

	public String getBANK() {
		return BANK;
	}

	public void setBANK(String BANK) {
		this.BANK = BANK;
	}

	public String getBANKCODE() {
		return BANKCODE;
	}

	public void setBANKCODE(String BANKCODE) {
		this.BANKCODE = BANKCODE;
	}

	public String getIFSC() {
		return IFSC;
	}

	public void setIFSC(String IFSC) {
		this.IFSC = IFSC;
	}

	@Override
	public String toString() {
		return "BankDetailsBean{" +
			   "MICR='" + MICR + '\'' +
			   ", BRANCH='" + BRANCH + '\'' +
			   ", ADDRESS='" + ADDRESS + '\'' +
			   ", STATE='" + STATE + '\'' +
			   ", CONTACT='" + CONTACT + '\'' +
			   ", UPI=" + UPI +
			   ", RTGS=" + RTGS +
			   ", CITY='" + CITY + '\'' +
			   ", CENTRE='" + CENTRE + '\'' +
			   ", DISTRICT='" + DISTRICT + '\'' +
			   ", NEFT=" + NEFT +
			   ", IMPS=" + IMPS +
			   ", SWIFT='" + SWIFT + '\'' +
			   ", ISO3166='" + ISO3166 + '\'' +
			   ", BANK='" + BANK + '\'' +
			   ", BANKCODE='" + BANKCODE + '\'' +
			   ", IFSC='" + IFSC + '\'' +
			   '}';
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (!(o instanceof BankDetailsBean)) return false;
		BankDetailsBean that = (BankDetailsBean) o;
		return isUPI() == that.isUPI() && isRTGS() == that.isRTGS() && isNEFT() == that.isNEFT() && isIMPS() == that.isIMPS() && getMICR().equals(that.getMICR()) && getBRANCH().equals(that.getBRANCH()) && getADDRESS().equals(that.getADDRESS()) && getSTATE().equals(that.getSTATE()) && getCONTACT().equals(that.getCONTACT()) && getCITY().equals(that.getCITY()) && getCENTRE().equals(that.getCENTRE()) && getDISTRICT().equals(that.getDISTRICT()) && getSWIFT().equals(that.getSWIFT()) && getISO3166().equals(that.getISO3166()) && getBANK().equals(that.getBANK()) && getBANKCODE().equals(that.getBANKCODE()) && getIFSC().equals(that.getIFSC());
	}

	@Override
	public int hashCode() {
		return Objects.hash(getMICR(), getBRANCH(), getADDRESS(), getSTATE(), getCONTACT(), isUPI(), isRTGS(), getCITY(), getCENTRE(), getDISTRICT(), isNEFT(), isIMPS(), getSWIFT(), getISO3166(), getBANK(), getBANKCODE(), getIFSC());
	}
}
