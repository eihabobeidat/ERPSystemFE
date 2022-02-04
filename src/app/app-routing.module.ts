import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './Admin/Employee/list/list.component';
import { AuthenticationComponentngComponent } from './Authentication/authentication-componentng/authentication-componentng.component';
import { LoginComponentComponent } from './Authentication/login-component/login-component.component';
import { RegistrationComponentComponent } from './Authentication/registration-component/registration-component.component';
import { AboutComponentComponent } from './Home/about-component/about-component.component';
import { ContactComponentComponent } from './Home/contact-component/contact-component.component';
import { HomeComponentComponent } from './Home/home-component/home-component.component';
import { MainNavbarComponentComponent } from './Home/main-navbar-component/main-navbar-component.component';

const routes: Routes = [
  { 
    path:'',component:MainNavbarComponentComponent 
  },
  {
    path:'aaa',component:ListComponent
  },
  
  {
    path: 'home', loadChildren: () => import('../app/Modules/homemodule/homemodule.module').then(
      (m) => m.HomemoduleModule,
    )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
