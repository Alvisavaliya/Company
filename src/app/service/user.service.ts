import { Injectable } from '@angular/core';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  user: User[] = [
    { id: 1, name: "alvi", password: "123456", roll: "Admin", islogin: false ,Permission:["employee","company"]},
    { id: 2, name: "Aayush", password: "00000", roll: "User", islogin: false ,Permission:["employee"]},
    { id: 3, name: "urvi", password: "1234", roll: "Super Admin", islogin: false ,Permission:["employee","company","branch"]},
    { id: 4, name: "Mahii", password: "12345", roll: "User", islogin: false ,Permission:["employee"]},
    { id: 5, name: "janvi", password: "123456", roll: "User", islogin: false ,Permission:["employee"]},
  ]
}
