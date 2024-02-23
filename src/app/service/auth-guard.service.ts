import { User } from './../Model/User';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  users:User[]=[]  
  constructor(private route:Router) { }

 isLogin:string = "Auth";


 User:User[]=[];
 roll:string[]=[]

 onLogin(name:string,password:string)
 {
  if(name === "" || password === "")
  {
    alert("please Fill all fild")
    return false
  }
console.log(name);

  const data =sessionStorage.getItem('Userdata')

  if(data)
  {
    this.User=JSON.parse(data)
  }

  const userfound=this.User.findIndex((User)=>
  {
    return User.name=== name && password === password
  })
  console.log(userfound);
  

  if(userfound == -1)
  {
    alert("Incorrect name & password")
    return false
  }

  else{
    this.User[userfound].islogin=true
    sessionStorage.setItem('loguser',JSON.stringify(this.User[userfound]))
    localStorage.setItem('token',JSON.stringify(this.isLogin))
    
    Swal.fire({
            text:"Login SuccessFully",
            icon:'success'
          })
    this.route.navigate(['/dashbord'])
    return true;
  }
 }

 logOut():void{
  localStorage.removeItem('token')
  this.route.navigate(['/login'])
 }



}

