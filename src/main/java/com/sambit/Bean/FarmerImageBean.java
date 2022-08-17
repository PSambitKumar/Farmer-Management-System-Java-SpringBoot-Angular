package com.sambit.Bean;

public class FarmerImageBean {
	private int id;
	private String name;
	private String image;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "FarmerImageBean{" +
			   "id=" + id +
			   ", name='" + name + '\'' +
			   ", image='" + image + '\'' +
			   '}';
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

}
