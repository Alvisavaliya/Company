import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from '../service/auth-guard.service';
import { User } from '../Model/User';
import Swal from 'sweetalert2';
import { RegisterComponent } from '../register/register.component';

@Injectable({
  providedIn: 'root'
})
export class RolePermissionGuard implements CanActivate, CanDeactivate<RegisterComponent> {

   a !:User
  constructor(private auth:AuthGuardService,private route:Router,private Active:ActivatedRoute){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const requirerole1 = route.data['role'];
      // const requirerole2 = route.data['role2'];
      // const requirerole3 = route.data['role3'];
      
      const  existuserRole = sessionStorage.getItem('loguser')
      if(existuserRole){
        console.log(existuserRole);
        
        this.a = JSON.parse(existuserRole)
      }
      // console.log(requirerole1,existuserRole);
      console.log(existuserRole);
      // console.log(requirerole1);
      
      if(this.a.Permission.includes(requirerole1))
      {
        return true
      }
      else
      {
        this.route.navigate(['/dashbord'])
        Swal.fire({
          title:'Can Not Access',
          icon:'warning'
        })
        return false;
        
      }
      
    }
     
  canDeactivate(
    component: RegisterComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      return component.onExit()
  }

 

  
}
