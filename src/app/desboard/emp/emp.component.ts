import { Employee } from './../../Model/employee';
import { style } from '@angular/animations';
import { User } from './../../Model/User';
import { EmployeeService } from './../../service/employee.service';
import { Component, ElementRef, Inject, OnInit, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, filter, from, map } from 'rxjs';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
 employeeService:EmployeeService =inject(EmployeeService);

  LoginUser!:User
  EditBtn:boolean = false
  DeleteBtn:boolean = false
  Userroll:string | null = null
  getIndex:number | null = null
  EditFormVisible: boolean = false;

  filterText: string = 'All';
  SearchItem:string ='';

    id:number |null =null;
    name:string |null = null;
    roll : string |null =null;
    age:number | null =null;
    adminNames: any;
    // employeeService: any;

    router:Router=Inject(Router)

  @ViewChild('gender')gender:ElementRef;
 

  constructor(private active:ActivatedRoute ,private service :EmployeeService) {
    this.ngOnInit
   }
   EmployeeDetail : Employee[]=[]
  //  filteredEmployees: Employee[] = [];
    employees:Employee[]=[]
  
  ngOnInit(): void {

   
    localStorage.setItem("Employee",JSON.stringify(this.EmployeeDetail))
    const userdata =sessionStorage.getItem('loguser');
    this.EmployeeDetail=this.service.EmployeeDetail

    if(userdata)
    {
      this.LoginUser=JSON.parse(userdata)
    }
    if(this.LoginUser.roll=== "Super Admin")
    {
      this.EditBtn=true
      this.DeleteBtn=true
    }
    if(this.LoginUser.roll === "Admin")
    {
      this.EditBtn=true
      this.DeleteBtn=false
    }
    if(this.LoginUser.roll === "User")
    {
      this.EditBtn=false
      this.DeleteBtn=false
    }
    this.EmployeeDetail=this.service.EmployeeDetail;
    this.getdata()

    
     
  }

  onsearch(value:string){
    console.log(this.SearchItem);
    this.router.navigate(['/emp'],{queryParams:{search:value }})
    
  }

  getdata(){
    this.service.getData().pipe(map((val)=>{
      return val.filter((e)=>{
        if(this.SearchItem)
        {
          return e.name === this.SearchItem
        }
        else
        {
          return e;
        }
      //   console.log(e);
      // this.name.toUpperCase().includes(this.filterText.toLowerCase());
      });
    })).subscribe((e)=>{
      console.log(e);
      
    })
    // console.log(this.service.getData());
  }
  DeleteRcd(id:number |null)
  {
      for(let i=0;i<this.EmployeeDetail.length;i++)
      {
        if(this.EmployeeDetail[i].id === id)
        {
          this.EmployeeDetail.splice(i,1)
          Swal.fire({
            title: "Deleted !",
            text: " Record Deleted SuccessFully!",
            icon: "success"
          });
        }
      }
  }
 

  EditClick(data: Employee)
  {
        this.EditFormVisible=true;

        this.getIndex =this.EmployeeDetail.findIndex((E)=>
        {
          return E.id === data.id;
        })

        this.id=data.id;
        this.name=data.name
        this.roll=data.roll
        this.age=data.age

  }
  UpdateUSerDetails()
  {
      this.EmployeeDetail[this.getIndex!].id = this.id
      this.EmployeeDetail[this.getIndex!].name =this.name
      this.EmployeeDetail[this.getIndex!].roll=this.roll
      this.EmployeeDetail[this.getIndex!].age=this.age

    this.name=""
    this.roll=""

    this.EditFormVisible=false
  }
}




function DeleteRcd(id: any, arg1: number) {
  throw new Error('Function not implemented.');
}

