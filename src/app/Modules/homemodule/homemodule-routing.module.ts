import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponentngComponent } from 'src/app/Authentication/authentication-componentng/authentication-componentng.component';
import { LoginComponentComponent } from 'src/app/Authentication/login-component/login-component.component';
import { RegistrationComponentComponent } from 'src/app/Authentication/registration-component/registration-component.component';
import { AboutComponentComponent } from 'src/app/Home/about-component/about-component.component';
import { ContactComponentComponent } from 'src/app/Home/contact-component/contact-component.component';
import { HomeComponentComponent } from 'src/app/Home/home-component/home-component.component';

const routes: Routes = [
  {
    path:'',component:HomeComponentComponent
  },
  {
    path:'about',component:AboutComponentComponent
  },
  {
    path:'contact',component:ContactComponentComponent
  },
  {
    path:'authentication',component:AuthenticationComponentngComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomemoduleRoutingModule { }
