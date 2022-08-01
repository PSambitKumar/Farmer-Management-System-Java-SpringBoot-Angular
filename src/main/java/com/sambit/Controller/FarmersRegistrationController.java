package com.sambit.Controller;

import com.sambit.Model.*;
import com.sambit.Service.MainService;
import com.sambit.Validation.AadharValidation;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

@Controller
@Slf4j
public class FarmersRegistrationController {

    private static final Logger logger = LoggerFactory.getLogger(FarmersRegistrationController.class);

    @Autowired
    private MainService mainService;

    @GetMapping(value = "/farmerRegistration")
    public String home(){
        return "FarmerRegistration";
    }

    @PostMapping(value = "/saveFarmer")
    public String saveFarmer(@ModelAttribute("farmer")Farmer farmer,
                             @RequestParam("bankName")String bankName,
                             @RequestParam("ifscCode")String ifscCode,
                             @RequestParam("accountNumber")String accountNumber,
                             @RequestParam("uniqueId")String uniqueId,
                             @RequestParam("ackId")String ackId,
                             @RequestParam("janadhaarId")String janadhaarId,
                             @RequestParam("adhaarId")String adhaarId,
                             @RequestParam("mobile")String mobile){
        System.out.println("Inside Save FarmerBean----------->>");
        logger.info("Details : " + farmer + ", Bank Name : " + bankName + ", Account Number :" + accountNumber + ", IFSC Code : " + ifscCode + ", Mobile : " + mobile);
        logger.info("Unique ID : " + uniqueId + ", Ack ID : " + ackId + ", Janadhaar ID : " + janadhaarId + ", Adhar ID : " + janadhaarId);

        try {
            Bank bank = new Bank();
            bank.setBankName(bankName);
            bank.setAccountNumber(accountNumber);
            bank.setIfscCode(ifscCode);
            bank.setMobileNumber((mobile));
            Bank saveBank = mainService.saveBank(bank);
            if (saveBank != null){
                System.out.println("Bank Saved Successfully.");
                farmer.setBank(bank);
                if (uniqueId.equalsIgnoreCase("Ack Id")){
                    System.out.println("Ack Id Recieved. " + ackId);
                    Acknowledge acknowledge = new Acknowledge();
                    acknowledge.setAcknowledgeId(ackId);
                    if (mainService.saveAcknowledge(acknowledge) != null){
                        System.out.println("Acknowledge ID Saved Successfully.");
                        farmer.setAcknowledge(acknowledge);
                        if (mainService.saveFarmer(farmer) != null){
                            System.out.println("FarmerBean Saved Successfully.");
                        }
                    }
                }
                else if (uniqueId.equalsIgnoreCase("Janadhaar Id")){
                    System.out.println("Janadhaar Id Recieved. " + janadhaarId);
                    Janadhaar janAdhaar = new Janadhaar();
                    janAdhaar.setJanadhaarId(janadhaarId);
                    if (mainService.saveJanAdhaar(janAdhaar) != null){
                        System.out.println("Janadhaar ID Saved Successfully.");
                        farmer.setJanAdhaar(janAdhaar);
                        if (mainService.saveFarmer(farmer) != null){
                            System.out.println("FarmerBean Saved Successfully.");
                        }
                    }
                }
                else if (uniqueId.equalsIgnoreCase("Adhaar Id")){
                    System.out.println("Adhaar Id Recieved. " + adhaarId);
                    Aadhar aadhar = new Aadhar();
                    aadhar.setAadharId(adhaarId);
                    if (mainService.saveAadhar(aadhar) != null){
                        System.out.println("Aadhar ID Saved Successfully.");
                        farmer.setAadhar(aadhar);
                        if (mainService.saveFarmer(farmer) != null){
                            System.out.println("FarmerBean Saved Successfully.");
                        }
                    }
                }
                else {
                    System.out.println("Something Went Wrong!!");
                }
            }else {
                System.out.println("Failed to Save Bank!");
            }

            System.out.println(farmer);
        }catch (Exception e){
            e.printStackTrace();
        }
        return "FarmerRegistrationUniqueId";
    }

    @GetMapping(value = "/searchFarmer")
    public String searchFarmer(RedirectAttributes redirectAttributes){
        redirectAttributes.addFlashAttribute("data", "NoData");
        return "FarmerRegistrationUniqueId";
    }

    @PostMapping(value = "/searchFarmer")
    public String searchFarmer(@RequestParam("uniqueId")String uniqueId,
                               @RequestParam("ackId")String ackId,
                               @RequestParam("janadhaarId")String janadhaarId,
                               @RequestParam("adhaarId")String adhaarId,
                               Model model, RedirectAttributes redirectAttributes){
        System.out.println(uniqueId + ackId + janadhaarId + adhaarId);
        try {
            Farmer farmer;
            if (uniqueId.equalsIgnoreCase("Ack Id")){
                System.out.println("Ack Id Recieved. " + ackId);
                farmer = mainService.findFarmerByAckId(ackId);
                System.out.println(farmer);
                model.addAttribute("farmer", farmer);
                redirectAttributes.addFlashAttribute("data", "Data");
            }
            else if (uniqueId.equalsIgnoreCase("Janadhaar Id")){
                System.out.println("Janadhaar Id Recieved. " + janadhaarId);
                farmer = mainService.findFarmerByJanadhaar(janadhaarId);
                System.out.println(farmer);
                model.addAttribute("farmer", farmer);
                redirectAttributes.addFlashAttribute("data", "Data");
            }
            else if (uniqueId.equalsIgnoreCase("Adhaar Id")){
                System.out.println("Adhaar Id Recieved. " + adhaarId);
                farmer = mainService.findFarmerByAadhar(adhaarId);
                System.out.println(farmer);
                model.addAttribute("farmer", farmer);
                redirectAttributes.addFlashAttribute("data", "Data");
                redirectAttributes.addFlashAttribute("farmer", farmer);
                redirectAttributes.addFlashAttribute("adhar", "Adhaar Id");
                redirectAttributes.addFlashAttribute("adharId", adhaarId);
                return "redirect:/searchFarmer";
            }
            else {
                redirectAttributes.addFlashAttribute("data", "Data");
                System.out.println("Something Went Wrong!!");
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return "FarmerRegistrationUniqueId";
    }

    @ResponseBody
    @GetMapping("/addRelation")
    public String addRelation(@RequestParam("fid") int fId, @RequestParam("relation")String relation){
        System.out.println("Inside Add Relation----------->>");
        System.out.println(fId + ", " + relation);
        return null;
    }

    @ResponseBody
    @GetMapping(value = "/saveBrother")
    public Relation saveBrother(Relation relation,
                              @RequestParam("bankName")String bankName,
                              @RequestParam("ifscCode")String ifscCode,
                              @RequestParam("accountNumber")String accountNumber,
                              @RequestParam("uniqueId")String uniqueId,
                              @RequestParam("ackId")String ackId,
                              @RequestParam("janadhaarId")String janadhaarId,
                              @RequestParam("adhaarId")String adhaarId,
                              @RequestParam("mobile")String mobile,
                              @RequestParam(value = "relation", required = false)String relation1,
                              @RequestParam("fId")int fId) {
        System.out.println("Inside Save Brother------------>>");
        System.out.println(relation);
        System.out.println(bankName + ifscCode + accountNumber + uniqueId + ackId + janadhaarId + adhaarId + mobile + relation1 + fId);
        String result = null;
        try {
            Farmer farmer = mainService.findFarmerById(fId);
            List<Relation> relationList = farmer.getRelationList();
            Bank bank = new Bank();
            bank.setBankName(bankName);
            bank.setAccountNumber(accountNumber);
            bank.setIfscCode(ifscCode);
            bank.setMobileNumber(mobile);
            mainService.saveBank(bank);
            relation.setBank(bank);
            relation.setRelationName(relation1);
            relation.setMobile(mobile);
            if (uniqueId.equalsIgnoreCase("Adhaar Id")){
                Aadhar aadhar = new Aadhar();
                aadhar.setAadharId(adhaarId);
                mainService.saveAadhar(aadhar);
                relation.setAadhar(aadhar);
                relationList.add(relation);
                farmer.setRelationList(relationList);
                if (mainService.saveFarmer(farmer) != null) {
                    System.out.println("Relation Added to FarmerBean's Data by Aadhar ID.");
                    result = "Saved";
                }
            }
            else if (uniqueId.equalsIgnoreCase("Ack Id")) {
                Acknowledge acknowledge = new Acknowledge();
                acknowledge.setAcknowledgeId(ackId);
                mainService.saveAcknowledge(acknowledge);
                relation.setAcknowledge(acknowledge);
                relationList.add(relation);
                farmer.setRelationList(relationList);
                logger.info(farmer.toString());
                if (mainService.saveFarmer(farmer) != null) {
                    System.out.println("Relation Added to FarmerBean's Data by Ack ID.");
                    result = "Saved";
                }
            } else if (uniqueId.equalsIgnoreCase("Janadhaar Id")) {
                Janadhaar janAdhaar = new Janadhaar();
                janAdhaar.setJanadhaarId(janadhaarId);
                mainService.saveJanAdhaar(janAdhaar);
                relation.setJanAdhaar(janAdhaar);
                relationList.add(relation);
                farmer.setRelationList(relationList);
                if (mainService.saveFarmer(farmer) != null) {
                    System.out.println("Relation Added to FarmerBean's Data by Janadhaar ID.");
                    result = "Saved";
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("Something Error Occurred.");
        }
        return relation;
    }

















//    Validation of Aadhar Called By Ajax Method
    @ResponseBody
    @GetMapping("/validateAadhar")
    public String validateAadhar(@RequestParam("aadhar") String aadhar){
        System.out.println("Inside Validate Aadhar----------------------->>");
        System.out.println(aadhar);
        String result = null;
        if (AadharValidation.validateAadhar(aadhar)){
            System.out.println("Valid Aadhar.");
            result = "Valid";
        }
        else {
            System.out.println("Not A Valid Aadhar!");
            result = "Invalid";
        }
        return result;
    }

}
