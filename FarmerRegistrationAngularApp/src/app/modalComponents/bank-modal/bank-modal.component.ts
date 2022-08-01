import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Bank} from "../../models/bank";

@Component({
  selector: 'app-bank-modal',
  templateUrl: './bank-modal.component.html',
  styleUrls: ['./bank-modal.component.css']
})
export class BankModalComponent implements OnInit {

  farmerName : any;
  bank : Bank = new Bank();

  constructor(@Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
    this.loadDataReceived();
  }

  loadDataReceived(){
    console.log(this.data);
    this.farmerName = this.data.farmerName;
    this.bank = this.data.bank;
    console.log(this.farmerName);
    console.log(this.bank);
  }
}
