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
  isLoading : boolean = true;
  response1 : any;
  response2 : any;
  response3 : any;
  response4 : any;
  response5 : any;
  response6 : any;
  response7 : any;
  response8: any;
  response9 : any;
  response10 : any;
  paginationData : String =
    '<ul class=\"pagination pagination-md\">' +
    '<li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0)\" >Previous</a></li>' +
    '<li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0)\" (click)=\"getData(1)\">1</a></li>' +
    '<li class=\"page-item active\"><a class=\"page-link\" href=\"javascript:void(0)\" (click)=\"getData(2)\">2</a></li>' +
    '</ul>';

  timer : any = 0;
  timeLeft: number = 60;
  newDate : any = new Date();
  staticDate : any = '25-09-2022';
  private startTime : number = 0;
  private responseTime: number = 0;

  // Content Download. The browser is receiving the response, either directly from the network or from a service worker. This value is the total amount of time spent reading the response body. Larger than expected values could indicate a slow network, or that the browser is busy performing other work which delays the response from being read.
contentDownloadTime : any = 0;
  private endTime: number = 0;
  private timeTaken: number = 0;

  idList : any =[];





constructor(private farmerService : FarmerService, private modalService : ModalService, public matDialog: MatDialog, private validationService : ValidationService, private router : Router) { }

  ngOnInit(): void {
    this.hideUniqueIdInput();
    this.addFarmer();
    this.getFarmerList();
    // this.getFarmerList1()
    // this.getTimer();


    setTimeout(() => {
      this.isLoading = false;
    }, 2000)
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
    //
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
        denyButtonText: `Don't Save`
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
          Swal.fire('Data Saved Successfully!', '', 'success');
          $('#farmerForm').trigger("reset");//For Reset of Form Using FormId
        } else if (result.isDenied) {
          Swal.fire('Failed To Save Data!', '', 'info')
        }
      })
    }
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
  
  
  getFarmerList1(){
  // Success Response
  this.farmerService.getFarmerList().subscribe(data => {
    this.startTime = new Date().getTime();
    alert("Start Time : " + this.startTime);
    this.farmerList = data;
    this.endTime = new Date().getTime();
    alert("End Time : " + this.endTime);
    this.timeTaken = this.endTime - this.startTime;
    alert("Time Taken : " + this.timeTaken);
  });
  }
  
  
  getFarmerList(){
    console.log("Inside Get Farmers List-------------->>")
    this.farmerService.getFarmerList().subscribe(data => {


      console.log("Data Printing.");
      console.log(data);
      this.farmerList = data;
      // console.log(this.farmerList);

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

  getTimer(){
  this.startTime = new Date().getTime();
  this.farmerService.getFarmerList().subscribe(data => {
    this.responseTime = new Date().getTime() - this.startTime;
    alert("Response Time : " + this.responseTime);
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


// Response Time Counting Code
  responseTimeCounting(){
    this.startTime = new Date().getTime();
    this.responseTime = new Date().getTime() - this.startTime;
    console.log("Response Time : " + this.responseTime);
  }

  viewFarmer(){



    $('#add').hide();
    $('#view').show();

    // Count Timer
    // $('#btn2').addClass("btn-primary");
    // $('#btn1').removeClass("btn-primary");
  }

  openModal1(){
    $('#modalSubscribe').show();
  }

  getData(data : any){
  alert("Inside Get Data : " + data);
  }

  getData1(){
  alert("Data")
  }

  getCheckValue(event : any, id : any){
  if (event.target.checked){
    this.idList.push(id);
    console.log("Id List After Add : " + this.idList);
  }else {
    this.idList.splice(this.idList.indexOf(id), 1);
    console.log("Id List  After Remove : " + this.idList);
  }
  }

  checkAll(event : any) {
    if (event.target.checked) {
      this.idList = [];
      for (let i = 0; i < this.farmerList.length; i++) {
        this.idList.push(this.farmerList[i].id);
      }
      console.log("Id List After Add : " + this.idList);
    }
  }

  setDate() {
    let currentDate = new Date();

    let firstDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    let firstDate1 = this.formatDate(firstDate);

    let secondDate = new Date(currentDate);
    secondDate.setDate(currentDate.getDate() - 30);
    let secondDate1 = this.formatDate(secondDate);

    let today = new Date(currentDate);
    let today1 = this.formatDate(today);
  }

  formatDate(date: any) {
    const monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let day = date.getDate();
    let month = monthsArray[date.getMonth()];
    let year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  // Sort Table
  // Html File Code
// <table class="table table-striped m-0">
//   <thead>
//     <tr>
//       <th scope="col" (click)="sort('memberID')">Member ID</th>
// <th scope="col" (click)="sort('memberName')">Name</th>
//     <th scope="col" (click)="sort('memberGender')">Gender</th>
//     <th scope="col" (click)="sort('memberAge')">Age</th>
//     <th scope="col" (click)="sort('maskAadhaarNumber')">Aadhaar Card No</th>
// <th scope="col" (click)="sort('rationCardNumber')">Ration Card No</th>
// <th scope="col">Select Patient</th>
// </tr>
// </thead>
// <tbody>
// <tr *ngFor="let family of familyInformation; let i = index">
// <!-- Rest of your code for table rows -->
// </tr>
// </tbody>
// </table>


  // TS File Code

  // familyInformation = [/* ... */]; // Your family information array
  // sortByKey: string = ''; // Key to sort by
  // sortAscending: boolean = true; // Sort order
  //
  // sort(key: string) {
  //   // If clicking on the same key, toggle sort order
  //   if (this.sortByKey === key) {
  //     this.sortAscending = !this.sortAscending;
  //   } else {
  //     this.sortByKey = key;
  //     this.sortAscending = true;
  //   }
  //
  //   // Sort the array based on the selected key and order
  //   this.familyInformation.sort((a, b) => {
  //     const valA = a[key] ? a[key] : 'NA';
  //     const valB = b[key] ? b[key] : 'NA';
  //
  //     if (this.sortAscending) {
  //       return valA.localeCompare(valB);
  //     } else {
  //       return valB.localeCompare(valA);
  //     }
  //   });
  // }



  // Learning
  // addPackage() {
  //   if (this.selectedPackageHeader == null)
  //     this.swalService.infoSWAL('Info', 'Please select package header!');
  //   else if (this.selectedPackageDetails == null)
  //     this.swalService.infoSWAL('Info', 'Please select package details!');
  //   else if (this.selectedWardDetails == null)
  //     this.swalService.infoSWAL('Info', 'Please select ward!');
  //   else if($('#txtTreatDays').val() == '' || $('#txtTreatDays').val() == 0)
  //     this.swalService.infoSWAL('Info', 'Please enter treatment days!');
  //   else if ($('#txtWardCost').val() == '' || $('#txtWardCost').val() == 0)
  //     this.swalService.infoSWAL('Info', 'Please enter ward cost and must be greater than 0!');
  //   else {
  //     let data = {
  //       packageHeaderId: this.selectedPackageHeader.packageHeaderId,
  //       packageHeaderName: this.selectedPackageHeader.packageHeaderName,
  //       packageSubCategoryId: this.selectedPackageDetails.packageSubCategoryId,
  //       packageSubCategoryName: this.selectedPackageDetails.packageSubCategoryName,
  //       procedureCode: this.selectedPackageDetails.procedureCode,
  //       packageCost: this.helperService.formatToNumber($('#txtPackageCost').val()),
  //       treatmentDays: $('#txtTreatDays').val(),
  //       wardId: this.selectedWardDetails.wardId,
  //       wardName: this.selectedWardDetails.wardName,
  //       wardCost: this.helperService.formatToNumber($('#txtWardCost').val()),
  //       totalPackageCost: this.helperService.formatToNumber($('#txtTotalPackageCost').val()),
  //       approvalRequired: this.selectedPackageDetails.mandetoryPreAuth.toUpperCase(),
  //       implantCost: 0,
  //       highEndDrugsCost: 0,
  //       packageHeader: this.selectedPackageHeader,
  //       packageDetails: this.selectedPackageDetails,
  //       wardDetails: this.selectedWardDetails,
  //       isPreAuthRequired: this.isPreApprovalRequired,
  //       medicalType: this.medicalType
  //     }
  //
  //     this.addedPackageList.push(data);
  //
  //     this.calculateAllTotalPackageCost();
  //     this.clearPackageSelection();
  //   }
  // }
  //
  // deleteAddedPackage(index: any, packageDetails: any) {
  //   this.swalService.questionConfirmSWAL('Delete', 'Are you sure you want to delete this package?')
  //     .then(
  //       (result: any) => {
  //         if (result.isConfirmed) {
  //           this.addedPackageList.splice(index, 1);
  //           this.calculateAllTotalPackageCost();
  //         }
  //       });
  // }
  //
  // calculateAllTotalPackageCost() {
  //   this.totalAmountToBeBlocked = {
  //     totalPackageCost: this.addedPackageList.reduce((a, b) => a + b.packageCost, 0),
  //     totalWardCost: this.addedPackageList.reduce((a, b) => a + b.wardCost, 0),
  //     totalOfTotalPackageCost: this.addedPackageList.reduce((a, b) => a + b.totalPackageCost, 0),
  //     totalImplantCost: this.addedPackageList.reduce((a, b) => a + b.implantCost, 0),
  //     totalHighEndDrugsCost: this.addedPackageList.reduce((a, b) => a + b.highEndDrugsCost, 0)
  //   }
  //
  //   this.allTotalCost = this.totalAmountToBeBlocked.totalOfTotalPackageCost +
  //     this.totalAmountToBeBlocked.totalImplantCost +
  //     this.totalAmountToBeBlocked.totalHighEndDrugsCost;
  //
  //   if (this.addedPackageList.length == 0) {
  //     this.isVisibleEmergency = false;
  //     this.isVisibleSurgical = false;
  //   }
  // }
  //
  // clearPackageSelection() {
  //   this.selectedPackageHeader = null;
  //   this.selectedPackageDetails = null;
  //   this.selectedWardDetails = null;
  //   this.wardDetailsList = [];
  //   this.isPreApprovalRequired = false;
  //
  //   $('#txtPackageHeader').val('');
  //   $('#txtPackageDetails').val('');
  //   $('#txtSubPackage').val('');
  //   $('#txtPackageCost').val('');
  //   $('#txtTotalPackageCost').val('');
  //   $('#txtWardCost').val('').attr('disabled', true);
  //   $('#txtTreatDays').val('').attr('disabled', true);
  // }
  //
  // hideAll() {
  //   this.isVisiblePatientInfo = false;
  //   this.isVisiblePatientDetails = false;
  //   this.isVisiblePackageDetails = false;
  //   this.admissionDetails = false;
  // }
  //
  // shouldDisplayHighEndDrugsButton(addedPackage: any): boolean {
  //   const { wardDetails, packageDetails} = addedPackage;
  //
  //   const isRoutineWard = wardDetails.wardName === 'Routine Ward';
  //   const isProcedureCodeMatch = packageDetails.procedureCode === 'MG069A'
  //     || packageDetails.procedureCode === 'MG090B'
  //     || packageDetails.procedureCode === 'MG092B';
  //
  //   return !isRoutineWard || (isRoutineWard && isProcedureCodeMatch);
  // }
  
}
