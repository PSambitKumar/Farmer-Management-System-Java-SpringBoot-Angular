import {Component, Inject, OnInit} from '@angular/core';
import {FarmerBean} from "../../beans/farmerBean";
import * as $ from 'jquery'
import {FarmerService} from "../../services/farmer.service";
import {Farmer} from "../../models/farmer";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ModalService} from "../../services/modal.service";
import {Bank} from "../../models/bank";
import {BankModalComponent} from "../../modalComponents/bank-modal/bank-modal.component";
import {ValidationService} from "../../services/validation.service";
import {BankDetailsBean} from "../../beans/bankDetailsBean";
import {ResponseBean} from "../../beans/responseBean";
import Swal from 'sweetalert2';
import {Router} from "@angular/router";
import {Relation} from "../../models/relation";
import {ViewRelativesComponent} from "../../modalComponents/view-relatives-modal/view-relatives.component";

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})

export class FarmerComponent implements OnInit{

  farmerBean : FarmerBean = new FarmerBean();
  farmer : Farmer = new Farmer();
  responseBean : ResponseBean = new ResponseBean();
  farmerList : Farmer[] = [];
  bankDetailsBean : BankDetailsBean = new BankDetailsBean();
  // response1 : any;
  // response2 : any;
  // response3 : any;
  // response4 : any;
  // response5 : any;
  // response6 : any;
  // response7 : any;
  // response8: any;
  // response9 : any;
  // response10 : any;

  constructor(private farmerService : FarmerService, private modalService : ModalService, public matDialog: MatDialog, private validationService : ValidationService, private router : Router) { }

  ngOnInit(): void {
    this.hideUniqueIdInput();
    this.addFarmer();
    this.getFarmerList();
  }

  // Methods Part

  farmerForm(){
    console.log(this.farmerBean);
    console.log("Inside FarmerBean Form Submit-------------->>");

    // this.response1 = this.validationService.validateDropdown(this.farmerBean.uniqueId, "#uniqueId", "#uniqueIdAlert", this.farmerBean.acknowledge, this.farmerBean.janAdhaar, this.farmerBean.aadhar);
    // this.response2 = this.validationService.validateMobileNumber(this.farmerBean.mobile, "#mobile", "#mobileAlert");
    // this.response3 = this.validationService.validateName(this.farmerBean.bank, "#bankName", "#bankAlert");
    // this.response4 = this.validationService.validateIFSCode(this.farmerBean.ifscCode, "#ifscCode", "#ifscAlert");
    // this.response5 = this.validationService.validateBankAccountNumber(this.farmerBean.accountNumber, "#accountNumber", "#accountNumberAlert");
    // this.response6 = this.validationService.validateRelationDropdown(this.farmerBean.relation, "#relation", "#relationAlert");
    // this.response7 = this.validationService.validateRadio(this.farmerBean.gender, "#male", "#female", "#genderAlert");
    // this.response8 = this.validationService.validateAge(this.farmerBean.age, "#age", "#ageAlert");
    // this.response9 = this.validationService.validateName(this.farmerBean.fathersName, "#fathersName", "#fathersNameAlert");
    // this.response10 = this.validationService.validateName(this.farmerBean.name, "#name", "#nameAlert");

    // console.log("Valid or Invalid Data : ");
    // console.log(this.response1 + "," + this.response2 + "," + this.response3 + "," + this.response4 + "," + this.response5 + "," + this.response6 + "," + this.response7 + "," + this.response8 + "," + this.response9 + "," + this.response10);


    if (this.validationService.validateName(this.farmerBean.name, "#name", "#nameAlert") == "Valid" &&
      this.validationService.validateName(this.farmerBean.fathersName, "#fathersName", "#fathersNameAlert") == "Valid" &&
      this.validationService.validateAge(this.farmerBean.age, "#age", "#ageAlert") == "Valid" &&
      this.validationService.validateRadio(this.farmerBean.gender, "#male", "#female", "#genderAlert") == "Valid" &&
      this.validationService.validateRelationDropdown(this.farmerBean.relation, "#relation", "#relationAlert") == "Valid" &&
      this.validationService.validateBankAccountNumber(this.farmerBean.accountNumber, "#accountNumber", "#accountNumberAlert") == "Valid" &&
      this.validationService.validateIFSCode(this.farmerBean.ifscCode, "#ifscCode", "#ifscAlert") == "Valid" &&
      this.validationService.validateName(this.farmerBean.bank, "#bankName", "#bankAlert") == "Valid" &&
      this.validationService.validateMobileNumber(this.farmerBean.mobile, "#mobile", "#mobileAlert") == "Valid" &&
      this.validationService.validateDropdown(this.farmerBean.uniqueId, "#uniqueId", "#uniqueIdAlert", this.farmerBean.acknowledge, this.farmerBean.janAdhaar, this.farmerBean.aadhar) == "Valid"){
      Swal.fire({
        title: 'Do you want to save the Data?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't Save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.farmerService.createFarmer(this.farmerBean).subscribe(data => {
            console.log(data);
            console.log("Resposnse Data : " + data);//Check Difference In Console
            this.responseBean = data;
            console.log(this.responseBean);
            if (this.responseBean.status == "Success"){
              this.router.navigate([""]);
            }
          });
          Swal.fire('Data Saved Successfully!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Failed To Save Data!', '', 'info')
        }
      })
    }
    // $('#farmerForm').trigger("reset");
  }

  // Chcek IFSC Code
  checkIFSCCode(ifscCode : any){
    console.log("IFSC Code : " + ifscCode);
    if (this.validationService.validateIFSCode(ifscCode, "#ifscCode", "#ifscAlert") == "Valid"){
      this.farmerService.getBankDetailsUsingIFSC(ifscCode).subscribe(data => {
        this.bankDetailsBean = data;
        $('#bankName').val(this.bankDetailsBean.bank);
        this.farmerBean.bank = this.bankDetailsBean.bank;
        console.log("Bank Details Received.");
        console.log(this.bankDetailsBean);
      })
    }
  }

  // Check Aadhar Id
  checkAadharId(aadharId : any){
    console.log(aadharId);
    this.validationService.validateAadhar(aadharId, "#adhaarId", "#aadharAlert");
  }
  getFarmerList(){
    console.log("Inside Get Farmers List-------------->>")
    this.farmerService.getFarmerList().subscribe(data => {
      this.farmerList = data;
      console.log(this.farmerList);

      // Iterator to Print Each Object of a List
      for (const datum of data) {
        console.log("Printing Each Farmer Object Data--------------->>");
        console.log(datum);
      }

      // Iterator to Print Each Object of a List
      for (const farmerListElement of this.farmerList) {
        console.log("Printing Each Farmer Object--------------->>");
        console.log(farmerListElement);
      }
    })
  }

  editFarmer(id : any){
    console.log("Farmer Id :" + id);
    Swal.fire({
      title: 'Do You Want to Edit?',
      showCancelButton: true,
      confirmButtonText: 'Yes, Edit',
    }).then((result) => {
      if (result.isConfirmed) {
        this.farmerService.editFarmerById(id).subscribe(data => {
          console.log(data);
          this.farmer = data;
          // Adding Data to Farmer Bean
          this.farmerBean.id = this.farmer.id;
          this.farmerBean.name = this.farmer.name;
          this.farmerBean.fathersName = this.farmer.fathersName;
          this.farmerBean.age = this.farmer.age;
          this.farmerBean.gender = this.farmer.gender;
          this.farmerBean.accountNumber = this.farmer.bank.accountNumber;
          this.farmerBean.ifscCode = this.farmer.bank.ifscCode;
          this.farmerBean.bank = this.farmer.bank.bankName;
          this.farmerBean.mobile = this.farmer.mobile;
          this.farmerBean.relation = this.farmer.relation;
          if (this.farmer.aadhar != null){
            this.farmerBean.aadhar = this.farmer.aadhar.aadharId;
          }
          if (this.farmer.janAdhaar != null){
            this.farmerBean.janAdhaar = this.farmer.janAdhaar.janadhaarId;
          }
          if (this.farmer.acknowledge != null){
            this.farmerBean.acknowledge = this.farmer.acknowledge.acknowledgeId;
          }

          this.addFarmer();
        })
      }
    })
  }

  deleteFarmer(id : any){
    console.log("Farmer Id :" + id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.farmerService.deleteFarmerById(id).subscribe(data => {
          console.log(data)
          this.responseBean = data;
          if (this.responseBean.status == "Success"){
            // location.reload();
            // this.viewFarmer();
            this.ngOnInit()
          }
        })
        Swal.fire(
          'Deleted!',
          'Your Data Has Been Deleted!.',
          'success'
        )
      }
    });
  }

  showBankDetails(bank : Bank, name : any){
    console.log("Bank Details :" + bank);
    const dialogRef = this.matDialog.open(BankModalComponent, {
      data : {
        "bank" : bank,
        "farmerName" : name
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  viewRelatives(farmer : Farmer, relationList : Relation[], farmerName : any, farmerId : any){
    // alert("Relation Lists Are : " + JSON.stringify(relationList) + ", Farmer Name : " + farmerName);
    const dialogRef = this.matDialog.open(ViewRelativesComponent, {
      data : {
        "farmer" : farmer,
        "relationList" : relationList,
        "farmerName" : farmerName,
        "farmerId" : farmerId
      }
    });

    dialogRef.afterClosed().subscribe(result =>{
      console.log(`Dialog Result : ${result}`);
    })
  }

  // openModal(){
  //   console.log("Inside Open Modal Method----------->>");
  //   this.modalService.openModalExample({text: "Hello, Sambit Kumar Pradhan."}).subscribe(data =>{
  //     console.log(data);
  //   });
  // }

  openModal() {
    const dialogRef = this.matDialog.open(FarmerComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  // For Hiding of Unique Id Inouts
  hideUniqueIdInput() {
    $('#id1').hide();
    $('#id2').hide();
    $('#id3').hide();
  }

  // When Unique Dropdown Changes This Function Calls
  uniqueDropDownChange(uniqueId : any){
    // alert(uniqueId);
    if (uniqueId == 1){
      $('#id1').show();
      $('#id2').hide();
      $('#id3').hide();
    }else if (uniqueId == 2){
      $('#id2').show();
      $('#id1').hide();
      $('#id3').hide();
    }else if (uniqueId == 3){
      $('#id3').show();
      $('#id1').hide();
      $('#id2').hide();
    }else {
      $('#id1').hide();
      $('#id2').hide();
      $('#id3').hide();
    }
  }

  addFarmer(){
    $('#add').show();
    $('#view').hide();
    // $('#btn1').addClass("btn-primary");
    // $('#btn2').removeClass("btn-primary");

  }
  viewFarmer(){
    $('#add').hide();
    $('#view').show();
    // $('#btn2').addClass("btn-primary");
    // $('#btn1').removeClass("btn-primary");
  }

  openModal1(){
    $('#modalSubscribe').show();
  }

}
