import { Component, OnInit } from '@angular/core';
import {FarmerService} from "../../services/farmer.service";
import {Farmer} from "../../models/farmer";
import {FormControl, FormGroup} from "@angular/forms";
import {animate} from "@angular/animations";

@Component({
  selector: 'app-farmer-education-details',
  templateUrl: './farmer-education-details.component.html',
  styleUrls: ['./farmer-education-details.component.css']
})
export class FarmerEducationDetailsComponent implements OnInit {
  matriculationVisible : boolean = false;
  intermediateVisible : boolean = false;
  graduateVisible : boolean = false;
  farmerList : Farmer[] = [];

  constructor(private farmerService : FarmerService) { }

  ngOnInit(): void {
    this.getFarmerList();
  }

  farmerEducationFormGroup = new FormGroup({
    farmerId : new FormControl(''),
    highQualification : new FormControl(''),
    currEmployement : new FormControl(''),
    experience : new FormControl(''),
    matriculation : new FormControl(''),
    matriculationBoard : new FormControl(''),
    schoolName : new FormControl(''),
    passoutYear : new FormControl(''),
    percentage : new FormControl(''),
    intermediate : new FormControl(''),
    intermediateBoard : new FormControl(''),
    collegeName : new FormControl(''),
    intermediatePassoutYear : new FormControl(''),
    intermediatePercentage : new FormControl(''),
    graduation : new FormControl(''),
    graduateBoard : new FormControl(''),
    graduateCollegeName : new FormControl(''),
    graduatePassoutYear : new FormControl(''),
    graduatePercentage : new FormControl('')
  })

  addEducation(){}
  viewEducation(){}
  farmerEducationForm(){}
  getFarmerList(){
    console.log("Inside Get Farmer List----->>");
    this.farmerService.getFarmerList().subscribe(data =>{
      this.farmerList = data;
      console.log("Farmer List--------->>");
      this.farmerList.forEach(farmer => {
        console.log(farmer);
      });
    });
  }

  onCheckMatriculation(event : any){
    console.log(event.target.value);
    // If Checkbox is checked then if condition will be execured otherwise else condition will be executed
    if (event.target.checked)
      this.matriculationVisible = true;
    else
      this.matriculationVisible = false;

  }

  onCheckIntermediate(event : any){
      console.log(event.target.value);
    if (event.target.checked)
      this.intermediateVisible = true;
    else
      this.intermediateVisible = false;
  }

  onCheckGraduation(event : any){
    console.log(event.target.value);
    if (event.target.checked)
      this.graduateVisible = true;
    else
      this.graduateVisible = false;
  }

}
