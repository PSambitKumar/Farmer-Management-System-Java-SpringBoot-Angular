package com.sambit.Controller;

import com.sambit.Model.Farmer;
import com.sambit.Service.MainServiceAngular;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

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
}
