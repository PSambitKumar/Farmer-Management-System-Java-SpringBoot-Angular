import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import * as $ from "jquery";
import {FarmerService} from "./farmer.service";
import {ResponseBean} from "../beans/responseBean";

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  response : any;
  responseBean : ResponseBean = new ResponseBean();

  constructor(private farmerService : FarmerService) { }

  // Name Validation
  validateName(name : any, inputId : any, alertId : any){
    const alphaRegX = /^[a-z A-Z.]*$/;
    if (name == null || name == ""){
      this.response = "Invalid";
      console.log("Empty Name!");
      $(alertId).text("Name Mustn't be Empty!").css('color', 'red');
      // $(alertId).css('border', '1px solid red'),focus();
      $(inputId).removeClass("is-valid").addClass("is-invalid");
      $(inputId).css('border', '2px solid red');
      $(inputId).focus();
      return this.response;
    }else if (name.length < 5){
      this.response = "Invalid";
      console.log("Name must be More Than 5 Characters.");
      $(alertId).text("Atleat 5 Characters!").css('color', 'red');
      $(inputId).removeClass("is-valid").addClass("is-invalid");
      $(inputId).css('border', '2px solid red');
      $(inputId).focus();
      return this.response;
    }else if (!name.match(alphaRegX)){
      this.response = "Invalid";
      console.log("Must be Alphabetic!");
      $(alertId).text("Must be Alphabetic!").css('color', 'red');
      $(inputId).removeClass("is-valid").addClass("is-invalid");
      $(inputId).css('border', '2px solid red');
      $(inputId).focus();
      return this.response;
    }else {
      this.response = "Valid";
      console.log("Valid Name.")
      $(inputId).removeClass("is-invalid").addClass("is-valid");
      $(inputId).css('border', '2px solid green');
      $(alertId).text("Looks Good.").css('color', 'green');
      return this.response;
    }
  }

  // Age Validation
  validateAge(age : any, inputId : any, alertId : any){
    if (age == null || age == ""){
      this.response = "Invalid";
      console.log("Empty Age!");
      $(inputId).removeClass("is-valid").addClass("is-invalid");
      $(inputId).css('border', '2px solid red');
      $(alertId).text("Age Mustn't be Empty!").css('color', 'red');
      $(inputId).focus();
      return this.response;
    }else if (age.length < 2){
      this.response = "Invalid";
      console.log("Invalid Age!");
      $(inputId).removeClass("is-valid").addClass("is-invalid");
      $(inputId).css('border', '2px solid red');
      $(alertId).text("Age Mustn't be Empty!").css('color', 'red');
      $(inputId).focus();
    } else {
      this.response = "Valid";
      console.log("Valid Age.");
      $(inputId).removeClass("is-invalid").addClass("is-valid");
      $(inputId).css('border', '2px solid green');
      $(alertId).text("Looks Good.").css('color', 'green')
      this.response = "Valid";
      return this.response;
    }

  }

  // Radio Validation Gender
  validateRadio(gender : any, inputId1 : any, inputId2 : any, alertId : any){
    if (gender == null || gender == ""){
      this.response = "Invalid";
      console.log("Empty Radio!");
      $(inputId1).removeClass("is-valid").addClass("is-invalid");
      $(inputId1).css('border', '2px solid red');
      $(inputId2).removeClass("is-valid").addClass("is-invalid");
      $(inputId2).css('border', '2px solid red');
      $(alertId).text("Must Select Gender!").css('color', 'red');
      $(inputId1).focus();
      return this.response;
    }else {
      this.response = "Valid";
      console.log("Valid Gender.");
      $(inputId1).removeClass("is-invalid").addClass("is-valid");
      $(inputId2).removeClass("is-invalid").addClass("is-valid");
      $(alertId).text("Looks Good,").css('color', 'green');
      $(inputId1).css('border', '2px solid green');
      $(inputId2).css('border', '2px solid green');
      return this.response;
    }
  }

  // Validate Dropdown for Relation Only Self
  validateRelationDropdown(select : any, inputId : any, alertId : any){
    console.log("Self Data : " + select);
    if (select == null || select == ""){
      this.response = "Invalid";
      console.log("Empty Relation!");
      $(inputId).removeClass("is-valid").addClass("is-invalid");
      $(inputId).css('border', '2px solid red');
      $(alertId).text("Must Select").css('color', 'red');
      $(alertId).focus();
      return this.response;
    }else {
      this.response = "Valid";
      console.log("Valid Relation(Self)");
      $(inputId).removeClass("is-invalid").addClass("is-valid");
      $(inputId).css('border', '2px solid green');
      $(alertId).text("Looks Good.").css('color', 'green');
      return this.response;
    }
  }

  // Validate Bank Account Number
  validateBankAccountNumber(accountNumber : any, inputId : any, alertId : any){
    const bankAccountNoRegx = /^\d{9,18}$/;
    if (accountNumber == null || accountNumber == ""){
      this.response = "Invalid";
      console.log("Empty Account Number.")
      $(inputId).removeClass("is-valid").addClass("is-invalid");
      $(inputId).css('border', '2px solid red');
      $(alertId).text("Account Number Mustn't be Empty!").css('color', 'red');
      $(inputId).focus();
      return this.response;
    }else if (!accountNumber.match(bankAccountNoRegx)){
      this.response = "Invalid";
      console.log("Invalid Account Number.")
      $(inputId).removeClass("is-valid").addClass("is-invalid");
      $(alertId).text("Invalid Account Number!").css('color', 'red');
      $(inputId).css('border', '2px solid red');
      $(inputId).focus();
      return this.response;
    }
    else {
      this.response = "Valid";
      console.log("Valid Account Number.");
      $(inputId).removeClass("is-invalid").addClass("is-valid");
      $(inputId).css('border', '2px solid green');
      $(alertId).text("Looks Good.").css('color', 'green');
      return this.response;
    }
  }

  // Validate IFSC Code
  validateIFSCode(ifscCode : any, inputId : any, alertId : any){
    const ifscCodeRegX = /^[A-Za-z]{4}\d{7}$/;
    if (ifscCode == null || ifscCode == ""){
      this.response = "Invalid";
      console.log("Empty IFSC Code!");
      $(inputId).removeClass("is-valid").addClass("is-invalid");
      $(alertId).text("IFSC Code Mustn't be Empty!").css('color', 'red');
      $(inputId).css('border', '2px solid red');
      $(inputId).focus();
      return this.response;
    }else if (!ifscCode.match(ifscCodeRegX)){
      this.response = "Invalid";
      console.log("Invalid IFSC Code!");
      $(inputId).removeClass("is-valid").addClass("is-invalid");
      $(alertId).text("Invalid IFSC Code!").css('color', 'red');
      $(inputId).css('border', '2px solid red');
      $(inputId).focus();
      return this.response;
    }else {
      this.response = "Valid";
      console.log("Valid IFSC Code.");
      $(inputId).removeClass("is-invalid").addClass("is-valid");
      $(inputId).css('border', '2px solid green');
      $(alertId).text("Looks Good.").css('color', 'green');
      return this.response;
    }
  }

  // Validate Mobile Number
  validateMobileNumber(mobile : any, inputId : any, alertId : any){
    if (mobile == null || mobile == ""){
      this.response = "Invalid";
      console.log("Empty Mobile Number.");
      $(inputId).removeClass("is-valid").addClass("is-invalid");
      $(inputId).css('border', '2px solid red');
      $(alertId).text("Mobile No. Mustn't be Empty!");
      $(inputId).focus();
      return this.response;
    }else if (mobile.length != 10){
      this.response = "Invalid";
      console.log("Invalid Mobile Number!");
      $(inputId).removeClass("is-valid").addClass("is-invalid");
      $(inputId).css('border', '2px solid red');
      $(alertId).text("Invalid Mobile Number!").css('color','red');
      $(inputId).focus();
      return this.response;
    }else {
      this.response = "Valid";
      console.log("Valid Mobile Number");
      $(inputId).removeClass("is-invalid").addClass("is-valid");
      $(inputId).css('border', '2px solid green');
      $(alertId).text("Looks Good.").css('color', 'green');
      return this.response;
    }
  }

  // ValidateDropdown
  validateDropdown(dropDownValue : any, inputId : any, alertId : any, ackId : any, janId : any, aadharId : any){
    // console.log("X");
    // console.log(dropDownValue);
    if (dropDownValue == 0 || dropDownValue == null || dropDownValue == ""){
      this.response = "Invalid";
      console.log("Empty Dropdown Value.");
      $(inputId).removeClass("is-valid").addClass("is-invalid");
      $(inputId).css('border', '2px solid red');
      $(alertId).text("Must Select!").css('color', 'red');
      $(inputId).focus();
      return this.response;
    }else {
      this.response = "Valid";
      console.log("Valid Drop Down Value.");
      $(inputId).removeClass("is-invalid").addClass("is-valid");
      $(inputId).css('border', '2px solid green');
      $(alertId).text("Looks Good.").css('color', 'green ');
      if (dropDownValue == 1){
        console.log("Acknowledgement Id : " + ackId);
        this.validateAcknowledge(ackId, "#ackId", "#ackAlert");
      }else if (dropDownValue == 2){
        console.log("Janadhaar Id : " + janId);
        this.validateJanaAadhar(janId, "#janadhaarId", "#janAlert");
      }else if (dropDownValue == 3){
        // console.log("Aadhar Id : " + aadharId);
        this.validateAadhar(aadharId, "#adhaarId", "#aadharAlert");
      }else {
        console.log("Something Error Occurred!")
      }
      return this.response;
    }
  }


  // Validate Acknowledgement Number
  validateAcknowledge(ackId : any, inputId : any, alertId : any){
    if (ackId == null || ackId == "" || ackId.length != 15){
      $(inputId).removeClass("is-valid").addClass("is-invalid");
      $(inputId).css('border', '2px solid red');
      $(alertId).text("Invalid Acknowledgement Id!").css('color', 'red');
      $(inputId).focus();
    }else {
      $(inputId).removeClass("is-invalid").addClass("is-valid");
      $(inputId).css('border', '2px solid green');
      $(alertId).text("Looks Good.").css('color', 'green');
    }
  }


  // Validate Janaadhar Number
  validateJanaAadhar(janId : any, inputId : any, alertId : any){
    if (janId == null || janId == "" || janId.length != 10){
      $(inputId).removeClass("is-valid").addClass("is-invalid");
      $(inputId).css('border', '2px solid red');
      $(alertId).text("Janadhaar Id Mustn't be Empty!!").css('color', 'red');
      $(inputId).focus();
    }else {
      $(inputId).removeClass("is-invalid").addClass("is-valid");
      $(inputId).css('border', '2px solid green');
      $(alertId).text("Looks Good.").css('color', 'green');
    }
  }

  // Validate Aadhar Number
  validateAadhar(aadharId : any, inputId : any, alertId : any){
    if (aadharId == null || aadharId == ""){
      this.response = "Invalid";
      $(inputId).removeClass("is-valid").addClass("is-invalid");
      $(inputId).css('border', '2px solid red');
      $(alertId).text("Aadhaar Id Mustn't be Empty!").css('color', 'red');
      $(inputId).focus();
    }else if (aadharId.length != 12){
      this.response = "Invalid";
      $(inputId).removeClass("is-valid").addClass("is-invalid");
      $(inputId).css('border', '2px solid red');
      $(alertId).text("Invalid Aadhar Length!").css('color', 'red');
      $(inputId).focus();
    }
    else if (aadharId.length == 12){
      this.farmerService.getValidateAadharId(aadharId).subscribe(data => {
        this.responseBean = data;
        // console.log("Received Response Data : ");
        // console.log(this.responseBean);
        if (this.responseBean.status != "Success"){
          this.response = "Invalid";
          $(inputId).removeClass("is-valid").addClass("is-invalid");
          $(inputId).css('border', '2px solid red');
          $(alertId).text("Invalid Aadhar Id!").css('color', 'red');
          $(inputId).focus();
        }else {
          this.response = "Valid";
          console.log("Valid Aadhar Id.")
          $(inputId).removeClass("is-invalid").addClass("is-valid");
          $(inputId).css('border', '2px solid green');
          $(alertId).text("Looks Good.").css('color', 'green');
        }
      })
    } else {
      $(inputId).removeClass("is-invalid").addClass("is-valid");
      $(inputId).css('border', '2px solid green');
      $(alertId).text("Looks Good.").css('color', 'green');
    }
  }


}

