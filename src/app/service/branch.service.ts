import { Injectable } from '@angular/core';
import { Branch } from '../Model/branch';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor() { }

  BranchDetail:Branch[]=[
    {BranchId:101,BranchName:"Adani", Branchcount:'5' ,CompanyId:201},
    {BranchId:102,BranchName:"Reliance", Branchcount:'6',CompanyId:202},
    {BranchId:103,BranchName:"Britaniya", Branchcount:'4',CompanyId:203},
    {BranchId:104,BranchName:"Avadh", Branchcount:'2',CompanyId:204},
    {BranchId:105,BranchName:"Himmaliya", Branchcount:'7',CompanyId:205},
  ]
}
