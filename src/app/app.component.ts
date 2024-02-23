import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pro';
  showLoader:boolean=false;
  session:any;

  // name:string='alvi';
  // password:string='alvi@1234';
  // role:string='admin';

//   onLogin(nm:string ,psw:string, role:string)
// {
//     if(this.name===nm && this.password===psw && this.role===role)
//     {
//       alert("login Succesfully")
//     }
//     else
//     {
//       alert("enter Valid Detail")
//     }
// }

// onLogin(){
//   let data={name:'alvi',password:'alvi@123',role:'user'}
//   localStorage.setItem('session', JSON.stringify(data))
 
// }
// savedata(){
//  let data:any=localStorage.getItem('session');
//  this.session=JSON.parse(data);
// //  alert(data)
// }



}
