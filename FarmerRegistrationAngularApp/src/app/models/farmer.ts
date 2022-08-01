import {Bank} from "./bank";
import {Janadhaar} from "./janadhaar";
import {Acknowledge} from "./acknowledge";
import {Aadhar} from "./aadhar";
import {Relation} from "./relation";

export class Farmer{
  id : any;
  name : any;
  fathersName : any;
  age : any;
  gender : any
  relation : any;
  mobile : any;
  bank : Bank = new Bank();
  janAdhaar : Janadhaar = new Janadhaar();
  acknowledge : Acknowledge = new Acknowledge();
  aadhar : Aadhar = new Aadhar();
  relationList : Relation[] = [];
}
