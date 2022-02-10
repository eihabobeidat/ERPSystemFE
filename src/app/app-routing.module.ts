import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './Admin/Employee/list/list.component';
import { ImagesliderManageComponent } from './Admin/imageslider-manage/imageslider-manage.component';
import { AuthenticationComponentngComponent } from './Authentication/authentication-componentng/authentication-componentng.component';
import { LoginComponentComponent } from './Authentication/login-component/login-component.component';
import { RegistrationComponentComponent } from './Authentication/registration-component/registration-component.component';
import { EmployeeDashboardComponent } from './Employee/employee-dashboard/employee-dashboard.component';
import { MyLeaveComponent } from './Employee/my-leave/my-leave.component';
import { TakeAttendenceComponent } from './Employee/take-attendence/take-attendence.component';
import { TakeLeaveComponent } from './Employee/take-leave/take-leave.component';
import { AboutComponentComponent } from './Home/about-component/about-component.component';
import { ContactComponentComponent } from './Home/contact-component/contact-component.component';
import { HomeComponentComponent } from './Home/home-component/home-component.component';
import { MainNavbarComponentComponent } from './Home/main-navbar-component/main-navbar-component.component';

const routes: Routes = [
  { 
    path:'',component:MainNavbarComponentComponent 
  },
  {
    path: 'home', loadChildren: () => import('../app/Modules/homemodule/homemodule.module').then(
      (m) => m.HomemoduleModule,
    )
  },
  {
    path: 'app', loadChildren: () => import('../app/Modules/authentication/authentication.module').then(
      (m) => m.AuthenticationModule,
    )
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
