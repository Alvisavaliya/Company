import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EmpComponent } from './desboard/emp/emp.component';
import { BranchComponent } from './desboard/branch/branch.component';
import { CompanyComponent } from './desboard/company/company.component';
import { DesboardComponent } from './desboard/desboard.component';
import { NoFoundComponent } from './no-found/no-found.component';
import { LoginGuard } from './Auth/login.guard';
import { AuthGuard } from './Auth/auth.guard';
import { RolePermissionGuard } from './Auth/role-permission.guard';

const routes: Routes = [
  {
    path: "",
    component: RegisterComponent
  },
  {
    path: "register",
    component: RegisterComponent,
    canActivate:[LoginGuard],
    canDeactivate:[RolePermissionGuard]
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate:[LoginGuard],
    

  },
  {
    path: "dashbord",
    canActivate:[AuthGuard],
    component: DesboardComponent,

    children: [

      {
        path: "emp",
        component: EmpComponent,
        canActivate:[RolePermissionGuard],
        // resolve:{employee:AuthGuard},
        data:{role:'employee'}
      },
      {
        path: "branch",
        component: BranchComponent,
        data:{role:'branch'},
        canActivate:[RolePermissionGuard]
      },
      {
        path: "cmp",
        component: CompanyComponent,
        data:{role:'company'},
        canActivate:[RolePermissionGuard]
      }
    ]
  },
  {
    path:'**',
    component:NoFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
