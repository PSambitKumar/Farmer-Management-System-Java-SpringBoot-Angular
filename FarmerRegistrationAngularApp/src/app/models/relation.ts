import {Bank} from "./bank";
import {Aadhar} from "./aadhar";
import {Acknowledge} from "./acknowledge";

export class Relation{
  id : any;
  name : any;
  fathersName : any;
  relationName : any;
  age : any;
  gender : any;
  mobile : any;
  bank : Bank = new Bank();
  janAdhaar : Aadhar = new Aadhar();
  acknowledge  : Acknowledge = new Acknowledge();
  aadhar : Aadhar = new Aadhar();
}
