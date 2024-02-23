import { EmployeeService } from './../service/employee.service';
import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../Model/employee';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate 
{
  // employeeService : EmployeeService =Inject(EmployeeService)
  constructor(private route:Router)
  {}

  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Employee[] | Observable<Employee[]> | Promise<Employee[]> {
  //  let emplist:Employee[]=[];
  //   this.employeeService.getData().subscribe((Emp:Employee[])=>{
  //     emplist=Emp;
  //   });
  //   
  // }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean
     {
      if(localStorage.getItem('token')==='"Auth"')
      {
        return true;
      }
      this.route.navigate(['/login'])
    return false;

  }
  
}
