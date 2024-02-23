import { Employee } from 'src/app/Model/employee';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';



export class EmployeeService {
 

 
 EmployeeDetail: Employee[] = [
    { id: 1, name: "alvi",roll: "super Admin",gender:"female",age:23 },
    { id: 2, name: "Aayush",roll: "Admin",gender:"male",age:16 },
    { id: 3, name: "Bhargav",  roll: "Admin" ,gender:"male",age:12},
    { id: 4, name: "Urvi", roll: "admin",gender:"female",age:20},
    { id: 5, name: "mahi", roll: "User" ,gender:"female",age:22}
    
  ];

 getData(){
  // return this.EmployeeDetail
  return new Observable <Employee[]>((e)=>{
    setTimeout(()=>{
      e.next(this.EmployeeDetail)
    },2000)
    // console.log("asdf");
  })
 }

 add=new Subject<Employee>()

 addfav(item){
  
 }

}