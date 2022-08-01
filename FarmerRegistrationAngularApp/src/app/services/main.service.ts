import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MainService {

private messageSource = new BehaviorSubject("For Sharing of Data");
currentMessage = this.messageSource.asObservable();

  constructor() { }

  exchangeData(data : any){
    this.messageSource.next(data);
  }

}
