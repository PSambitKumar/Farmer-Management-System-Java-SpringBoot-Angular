import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-farmer-portal-registration',
  templateUrl: './farmer-portal-registration.component.html',
  styleUrls: ['./farmer-portal-registration.component.css']
})
export class FarmerPortalRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.hideUniqueIdInput();
  }

  farmerPostalForm(){}
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
}
