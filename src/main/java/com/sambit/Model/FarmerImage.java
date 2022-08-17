package com.sambit.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class FarmerImage {
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column
	private String name;
	@Column
	private String farmerImagePath;

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

	public String getFarmerImagePath() {
		return farmerImagePath;
	}

	public void setFarmerImagePath(String farmerImagePath) {
		this.farmerImagePath = farmerImagePath;
	}

	@Override
	public String toString() {
		return "FarmerImage{" +
			   "id=" + id +
			   ", name='" + name + '\'' +
			   ", farmerImagePath='" + farmerImagePath + '\'' +
			   '}';
	}
}
