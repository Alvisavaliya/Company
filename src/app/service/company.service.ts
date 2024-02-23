import { Injectable } from '@angular/core';
import { Company } from '../Model/company';
import { Subject } from 'rxjs';
import { data } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  companyDetails:Company[]=[
    
    {CompanyId:101,CompanyName:"Google",CompanyLocation:"Ahmedabad",CompanyGst:12345},
    {CompanyId:102,CompanyName:"Microsoft",CompanyLocation:"Rajkot",CompanyGst:67890},
    {CompanyId:103,CompanyName:"TATA",CompanyLocation:"Surat",CompanyGst:13525},
    {CompanyId:104,CompanyName:"Reliance",CompanyLocation:"Baroda",CompanyGst:85743},
    {CompanyId:105,CompanyName:"Acty System",CompanyLocation:"bhavnagar",CompanyGst:65345},
  ]

  //Create a subject
  add=new Subject<Company>();

  addfav(data:Company)
  {
    this.add.next(data)
  }
}
