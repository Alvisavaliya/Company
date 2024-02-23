import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from '../Model/User';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  id:number=0;
  
  cango:boolean = false

  @ViewChild ('name')name !:ElementRef;
  @ViewChild ('password') password !:ElementRef;
  @ViewChild ('roll') roll !:ElementRef;
 
  userdata:User[]=[

    {id:1,name:"Alvi",password:"123456",roll:"Admin",islogin:false,Permission:["employee","company"]},
    {id:2,name:"Aayush",password:"41526",roll:"Super Admin",islogin:false,Permission:["employee","company","branch"]},
    {id:3,name:"urvi" , password:"56987" , roll: "user" ,islogin:false,Permission:["employee"]},
    {id:4,name:"Mahi",password:"1205",roll:"User",islogin:false,Permission:["employee"]}
    
  ]
  constructor( private route:Router) { }

  ngOnInit(): void {
  }

  registerFunction(){
   const  username = this.name.nativeElement.value
   const userpassword = this.password.nativeElement.value
  //  const userroll =this.roll.nativeElement.value   

   if(username === "" || userpassword === "" )
   {
   Swal.fire("Please Input All Fild");
   return;
   }
   if (userpassword.length < 4) {
    Swal.fire("Password must be at least 4 characters");
    return;
  }


   this.userdata.push({id:this.userdata.length+1,
                      name:username,
                      password:userpassword,
                      roll:"user",
                      islogin:false,
                      Permission:['employee']})


   sessionStorage.setItem("Userdata",JSON.stringify(this.userdata))

   this.name.nativeElement.value = "";
   this.password.nativeElement.value = "";
 

   Swal.fire({
     title: "Sucesfully",
     text: "You are register Successfully ",
     icon: "success"
   });
   
   this.cango =true
   this.route.navigate(['login']);
  }
  
  onExit(){
    if((this.name.nativeElement.value || this.password.nativeElement.value) && !this.cango){
      return confirm("are you sure")
    }
    else{
      return true
    }
  }


}