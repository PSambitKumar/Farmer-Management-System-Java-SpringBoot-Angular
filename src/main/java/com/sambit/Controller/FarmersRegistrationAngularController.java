package com.sambit.Controller;

import com.google.gson.Gson;
import com.sambit.Bean.BankDetailsBean;
import com.sambit.Bean.FarmerBean;
import com.sambit.Bean.ResponseBean;
import com.sambit.Model.Acknowledge;
import com.sambit.Model.Bank;
import com.sambit.Model.Farmer;
import com.sambit.Model.Relation;
import com.sambit.Service.MainService;
import com.sambit.Service.MainServiceAngular;
import com.sambit.Utils.RecieveData;
import com.sambit.Validation.AadharValidation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.lang.instrument.Instrumentation;
import java.util.Collection;
import java.util.List;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/farmer/v1")
public class FarmersRegistrationAngularController {

    @Autowired
    private MainService mainService;
    @Autowired
    private MainServiceAngular mainServiceAngular;

    @ResponseBody
    @GetMapping("/farmerManagement")
    public List<Farmer> farmerRegistrationManagement(){
        System.out.println("Inside FarmerBean Registration Management---------------->>");
//        log.info(mainService.findAllFarmersList().toString());
        return mainService.findAllFarmersList();
    }

    @ResponseBody
    @GetMapping("/relationList")
    public List<Relation> getRelationList(){
        System.out.println("Inside Relation List Method-------------------->>");
        return mainService.findAllRelationList();
    }

    @PostMapping( "/createFarmer")
    public ResponseEntity<ResponseBean> createEmployee(@RequestBody FarmerBean farmerBean){
        System.out.println("Inside Create FarmerBean--------------->>");
        System.out.println(farmerBean);
        Farmer farmer = mainServiceAngular.createFarmer(farmerBean);
        ResponseBean responseBean;
        if (farmer.getId() != 0){
            responseBean = new ResponseBean();
            responseBean.setStatus("Success");
        }else {
            responseBean = new ResponseBean();
            responseBean.setStatus("Fail");
        }
//        Farmer farmer  = mainService.findFarmerById(1);//Just Checking Full Data
        System.out.println(farmer);
        return ResponseEntity.ok(responseBean);
    }


    @ResponseBody
    @GetMapping(value = "/getFarmerList")
    public List<Farmer> getFarmerList(){
        System.out.println("Inside Get Farmers List---------------->>");
        return mainServiceAngular.getFarmerList();
    }


    @GetMapping(value = "/getBankUsingIFSCCode/{ifscCode}")
    public ResponseEntity<BankDetailsBean> getBankUsingIFSCCode(@PathVariable("ifscCode")String ifscCode){
        System.out.println("Inside Get Bank Details Using IFSC Code----------------------->>");
        System.out.println("IFSC Code : " + ifscCode);
        Gson gson = new Gson();
        RestTemplate restTemplate = new RestTemplate();
        String bankDetails = restTemplate.getForObject("https://ifsc.razorpay.com/"+ifscCode, String.class);
        System.out.println(bankDetails);

        //        Converting JSON String to ModeL Class
        BankDetailsBean bankDetailsBean = gson.fromJson(bankDetails, BankDetailsBean.class);
        System.out.println("Bank Details are : " + bankDetailsBean);

        String result = RecieveData.data(ResponseEntity.ok(bankDetailsBean));
        System.out.println("Recieved from Received Data : " + result);

        return ResponseEntity.ok(bankDetailsBean);
    }

    @GetMapping(value = "/getValidateAadhar/{aadharId}")
    public ResponseEntity<ResponseBean> getValidateAadhar(@PathVariable("aadharId")String aadharId, ResponseBean responseBean){
        System.out.println("Inside Get Validate Aadhar Id--------------->>");
        System.out.println(aadharId);
        if (AadharValidation.validateAadhar(aadharId)){
            responseBean.setStatus("Success");
        }else {
            responseBean.setStatus("Failed");
        }
        return ResponseEntity.ok(responseBean);
    }

    @GetMapping(value = "/deleteFarmer/{id}")
    public ResponseEntity<ResponseBean> deleteFarmer(@PathVariable(value = "id", required = false)int id){
        System.out.println("Inside Delete Farmer Method---------------->>");
        System.out.println("Farmer ID : " + id);
        ResponseBean responseBean = null;
        try {
            String response  = mainServiceAngular.deleteFarmerById(id);
            responseBean = new ResponseBean();
            responseBean.setStatus(response);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return ResponseEntity.ok(responseBean);
    }

    @GetMapping(value = "/editFarmerById/{id}")
    public ResponseEntity<Farmer> editFarmerById(@PathVariable(value = "id", required = false)int id){
        System.out.println("Inside Edit Farmer Method--------------->>");
        System.out.println("Farmer Id : " + id);
        Farmer farmer = mainServiceAngular.getFarmerById(id);
        return ResponseEntity.ok(farmer);
    }

    @PostMapping(value = "saveRelationUsingFarmerId/{farmerId}")
    public ResponseEntity<ResponseBean> saveRelationUsingFarmerId(@PathVariable("farmerId")int farmerId, @RequestBody Relation relation, ResponseBean responseBean){
        System.out.println("Inside Save Relation-------------->>");
        System.out.println("Farmer Id : " + farmerId + ",\n Relation Data : " + relation);
        Farmer farmer = mainServiceAngular.saveRelationUsingFarmerId(farmerId, relation);
        if (farmer.getId() == farmerId){
            responseBean.setStatus("Success");
        }else {
            responseBean.setStatus("Fail");
        }
        return ResponseEntity.ok(responseBean);
    }

}
