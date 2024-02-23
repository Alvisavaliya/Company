import { Component, OnInit } from '@angular/core';
import {User} from '../../Model/User';
import { Company } from '../../Model/company';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CompanyService } from 'src/app/service/company.service';
import Swal from 'sweetalert2';
import {UserService} from './../../service/user.service'

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})

export class CompanyComponent implements OnInit {



LoginUser!:User
EditBtn:boolean = false
DeleteBtn:boolean = false
roll:string | null = null
getIndex:number | null = null
EditFormVisible: boolean = false;


id:number | null = null 
name:string | null = null
location:string | null = null
gst:number | null = null


constructor(private active:ActivatedRoute,private service:CompanyService){
  this.ngOnInit
}
companyDetails:Company[]=[]

ngOnInit(): void {
  //localStorage.setItem("Employee",JSON.stringify(this.companyDetails))
  const userdata = sessionStorage.getItem('loguser')
  this.companyDetails = this.service.companyDetails


  if(userdata)
  {
    this.LoginUser=JSON.parse(userdata)
  }
  
  
  if(this.LoginUser.roll === "Super Admin"){
    this.EditBtn=true;
    this.DeleteBtn=true;
  }
  if(this.LoginUser.roll === "Admin"){
    this.EditBtn=true;
    this.DeleteBtn=false
  }
  if(this.LoginUser.roll === "User")
  {
    this.EditBtn=false
    this.DeleteBtn=false
  }
  this.companyDetails=this.service.companyDetails
}

  DeleteBtnClick(id: number | null){

    for (let i=0;i<this.companyDetails.length;i++)
    {
      if(this.companyDetails[i].CompanyId === id)
      {
        this.companyDetails.splice(i,1)
        Swal.fire({
          title: "Deleted!",
          text: "Record Deleted SuccessFully!",
          icon: "success"
        });
      }
    }
}

EditBtnClick(data:Company){
  this.EditFormVisible = true;

  this.getIndex = this.companyDetails.findIndex((e)=>{
    return e.CompanyId === data.CompanyId
  })

 this.id = data.CompanyId
 this.name = data.CompanyName
  this.location = data.CompanyLocation
  this.gst = data.CompanyGst



}

UpdateUSerDetails(){
  this.companyDetails[this.getIndex!].CompanyId = this.id
  this.companyDetails[this.getIndex!].CompanyName = this.name
  this.companyDetails[this.getIndex!].CompanyLocation = this.location
  this.companyDetails[this.getIndex!].CompanyGst = this.gst
  this.name = ""
  this.location = ""
  this.EditFormVisible = false;

}


addfavourite(item:Company)
{
  // this.service.addfav(item)
  console.log(item);
  this.service.addfav(item)
}
}