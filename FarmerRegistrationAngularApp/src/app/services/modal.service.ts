import { Injectable } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {FarmerComponent} from "../components/farmer/farmer.component";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private matDialog : MatDialog) { }

  public openModalExample(data : any = []) : Observable<any>{
    var matDialogConfig = new MatDialogConfig();
    matDialogConfig.panelClass = "add-more-pop";
    matDialogConfig.data = data;
    let matDialogRef : MatDialogRef<FarmerComponent>;
    matDialogRef = this.matDialog.open(FarmerComponent, matDialogConfig);
    return matDialogRef.afterClosed();
  }

}
