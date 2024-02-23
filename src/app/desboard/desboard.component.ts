import { Component, OnInit } from '@angular/core';
import { User } from '../Model/User';
import Swal from 'sweetalert2';
import { AuthGuardService } from '../service/auth-guard.service';
import { Company } from '../Model/company';
import { Router } from '@angular/router';
import { CompanyService } from '../service/company.service';
import { style } from '@angular/animations';


@Component({
  selector: 'app-desboard',
  templateUrl: './desboard.component.html',
  styleUrls: ['./desboard.component.css']
})
export class DesboardComponent implements OnInit {
  name: string | undefined;
  getdata:User | null = null
  username:string | null = null
  newTask:string ='';
  feb:string|null=null;
  data !:Company;


  constructor(private auth:AuthGuardService,private route:Router , private service:CompanyService) { }

  ngOnInit(): void {

    const userdata = sessionStorage.getItem('loguser')
    
    if(userdata){
      this.getdata = JSON.parse(userdata)
      this.username = this.getdata?.name || null
    } 

    this.service.add.subscribe(e=>{
      this.data=e
      this.feb =this.data.CompanyName ;
    
    })
  }

 
  
  logOut(){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be LogOut!",
      icon: "error",
      // showCancelButton: true,
      confirmButtonColor: "SkyBlue",
      // cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text:"All data are deleted.",
          icon: "success"
        });
        this.auth.logOut()
      }
    });
  }
  
}
