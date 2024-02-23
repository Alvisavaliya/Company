import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DesboardComponent } from './desboard/desboard.component';
import { EmpComponent } from './desboard/emp/emp.component';
import { BranchComponent } from './desboard/branch/branch.component';
import { CompanyComponent } from './desboard/company/company.component';
import { NoFoundComponent } from './no-found/no-found.component';
import { EmployeeService } from './service/employee.service';
import { FilterpipePipe } from './pipe/filterpipe.pipe';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DesboardComponent,
    EmpComponent,
    BranchComponent,
    CompanyComponent,
    NoFoundComponent,
    FilterpipePipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
  entryComponents:[]
})
export class AppModule { }
