import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './Home/home-component/home-component.component';
import { ContactComponentComponent } from './Home/contact-component/contact-component.component';
import { AboutComponentComponent } from './Home/about-component/about-component.component';
import { LoginComponentComponent } from './Authentication/login-component/login-component.component';
import { RegistrationComponentComponent } from './Authentication/registration-component/registration-component.component';
import { NavbarComponentComponent } from './Shared/navbar-component/navbar-component.component';
import { FooterComponentComponent } from './Shared/footer-component/footer-component.component';
import { MainNavbarComponentComponent } from './Home/main-navbar-component/main-navbar-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ContactComponentComponent,
    AboutComponentComponent,
    LoginComponentComponent,
    RegistrationComponentComponent,
    NavbarComponentComponent,
    FooterComponentComponent,
    MainNavbarComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
