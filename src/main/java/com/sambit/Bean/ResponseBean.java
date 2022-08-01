package com.sambit.Bean;

public class ResponseBean {
	private String status;

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Response{" +
			   "status='" + status + '\'' +
			   '}';
	}
}
