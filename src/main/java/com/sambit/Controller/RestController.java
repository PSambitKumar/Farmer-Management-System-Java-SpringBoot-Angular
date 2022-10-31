package com.sambit.Controller;

import com.sambit.Model.Farmer;
import com.sambit.Service.MainServiceAngular;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @Project : FarmersRegistration
 * @Auther : Sambit Kumar Pradhan
 * @Created On : 27/10/2022 - 12:17 PM
 */
@Controller
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/farmer/REST")
public class RestController {

	private final MainServiceAngular mainServiceAngular;

	public RestController(MainServiceAngular mainServiceAngular) {
		this.mainServiceAngular = mainServiceAngular;
	}

	@GetMapping(value = "/getFarmerDetailsById")
	public ResponseEntity<?> getFarmerDetailsById(@RequestParam(value = "Id", required = false)int Id) {
		System.out.println("Inside Get Farmer Details By Id---------->>");
		System.out.println("Id : " + Id);
		Farmer farmer = mainServiceAngular.getFarmerById(Id);
		if (farmer != null) {
			return ResponseEntity.ok(farmer);
		} else {
			return ResponseEntity.ok("No Data Found");
		}
	}

	@GetMapping(value = "/getAllFarmerDetails")
	public ResponseEntity<?> getAllFarmerDetails(){
		List<Farmer> farmerList = mainServiceAngular.getFarmerList();
		if (farmerList.size() > 0)
			return ResponseEntity.ok(farmerList);
		else
			return ResponseEntity.ok("No Farmer Found!");
	}

	@GetMapping(value = "/getFarmerList")
	public ResponseEntity<Map<String, Object>> getFarmerList(){
		Map<String, Object> map = new HashMap<>();
		try {
			List<Farmer> farmerList = mainServiceAngular.getFarmerList();
			if (farmerList.size() > 0){
				map.put("status", HttpStatus.OK.value());
				map.put("data", farmerList);
			}else {
				map.put("status", HttpStatus.NOT_FOUND.value());
				map.put("data", "No Farmer Found!");
			}
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		return ResponseEntity.ok(map);
	}

	@GetMapping(value = "/getFarmerDetailsByFarmerId")
	public ResponseEntity<Map<String, Object>> getFarmerDetailById(@RequestParam(value = "Id", required = false)int id){
		System.out.println("Inside Get Farmer Details By Farmer Id");
		System.out.println("Farmer Id : " + id);
		Map<String, Object> map = new HashMap<>();
		Farmer farmer = mainServiceAngular.getFarmerById(id);
		if (farmer != null){
			map.put("status", HttpStatus.OK.value());
			map.put("data", farmer);
		}else {
			map.put("status", HttpStatus.NOT_FOUND.value());
			map.put( "data","No Farmer Found With This " + id);
		}
		return ResponseEntity.ok(map);
	}


}
