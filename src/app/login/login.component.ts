import { Router, Routes } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from '../Model/User';
import Swal from 'sweetalert2';
import { AuthGuardService } from '../service/auth-guard.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  @ViewChild('name')username!: ElementRef;
  @ViewChild('password')password!: ElementRef;
  users:User[]=[]  
  constructor(private route:Router,private auth:AuthGuardService)  {}

  ngOnInit(): void {
  }

onLogin(){
  const Username= this.username.nativeElement.value;
  const UserPassword= this.password.nativeElement.value;
  this.auth.onLogin(Username,UserPassword)
}
// //localstorage data 
//   // console.log(this.loginArray);
//   // localStorage.setItem('name' ,JSON.stringify(this.loginArray));
}
