import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './Authentication/login-component/login-component.component';
import { RegistrationComponentComponent } from './Authentication/registration-component/registration-component.component';
import { AboutComponentComponent } from './Home/about-component/about-component.component';
import { ContactComponentComponent } from './Home/contact-component/contact-component.component';
import { HomeComponentComponent } from './Home/home-component/home-component.component';
import { MainNavbarComponentComponent } from './Home/main-navbar-component/main-navbar-component.component';

const routes: Routes = [
  { 
    path:'main',component:MainNavbarComponentComponent
  },
  {
    path:'home',component:HomeComponentComponent
  },
  {
    path:'about',component:AboutComponentComponent
  },
  {
    path:'contact',component:ContactComponentComponent
  },
  {
    path:'login',component:LoginComponentComponent
  },
  {
    path:'register',component:RegistrationComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
