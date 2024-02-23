import { UserService } from './../../service/user.service';
import { User } from './../../Model/User';
import { Branch } from './../../Model/branch';
import { Company } from './../../Model/company';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BranchService } from 'src/app/service/branch.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

LoginUser!:User
EditBtn:boolean = false
DeleteBtn:boolean = false
roll:string | null = null
getIndex:number | null = null
EditFormVisible: boolean = false;



BranchId:number |null =null;
BranchName:string | null =null;
Branchcount:string| null=null;
CompanyId:number | null=null;

  constructor(private active:ActivatedRoute,private service:BranchService) { 
    this.ngOnInit
  }

  BranchDetail:Branch[]=[]
  showConfirmDeleteComponent:boolean=false;


  ngOnInit(): void {
    const userdata = sessionStorage.getItem('loguser')
    this.BranchDetail = this.service.BranchDetail;
    // this.userroll =  this.active.snapshot.queryParamMap.get('userroll')
    //sessionStorage.setItem('loguser',name)

    if(userdata){
      this.LoginUser = JSON.parse(userdata)
    }

    if(this.LoginUser.roll === "Super Admin")
    {
      this.EditBtn = true;
      this.DeleteBtn = true
    }
    if(this.LoginUser.roll === "Admin")
    {
      this.EditBtn = true;
      this.DeleteBtn = false
    }
    if(this.LoginUser.roll === "User")
    {
      this.EditBtn = false;
      this.DeleteBtn = false
    }
  }

  DeleteBtnClick(id: number | null){
    this.showConfirmDeleteComponent=true;
    for (let i=0;i<this.BranchDetail.length;i++)
    {
      if(this.BranchDetail[i].BranchId === id)
      {
       this.BranchDetail.splice(i,1)
       Swal.fire({
        title: "Deleted !",
        text: "Record Deleted SuccessFully!",
        icon: "success"
      });
      }
     
    }
  }

  editClick(data:Branch)
  {
      this.EditFormVisible=true

      this.getIndex=this.BranchDetail.findIndex((b)=>
      {
        return b.BranchId === data.BranchId
      })

      this.BranchId=data.BranchId
      this.BranchName=data.BranchName
      this.Branchcount=data.Branchcount
      this.CompanyId=data.CompanyId
  }
    UpdateUSerDetails()
  {
    this.BranchDetail[this.getIndex!].BranchId=this.BranchId
    this.BranchDetail[this.getIndex!].BranchName=this.BranchName
    // this.BranchDetail[this.getIndex].
    this.BranchDetail[this.getIndex!].Branchcount=this.Branchcount
    this.BranchDetail[this.getIndex!].CompanyId=this.CompanyId
  this.BranchName=""
  this.Branchcount=""
  this.EditFormVisible=false
  
  }
}


