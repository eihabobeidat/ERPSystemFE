import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';
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
import { HeaderComponent } from './Home/contact-component/header/header.component';
import { ContactUsInfoCardComponent } from './Home/contact-component/contact-us-info-card/contact-us-info-card.component';
import { ContactUsFormComponent } from './Home/contact-component/contact-us-form/contact-us-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import {matDialogAnimations, MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    MainNavbarComponentComponent,
    HeaderComponent,
    ContactUsInfoCardComponent,
    ContactUsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({timeOut:5000, progressAnimation:'increasing'}),
    NgxSpinnerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule
    NgImageSliderModule,
    NgbModule
  ],
  entryComponents:[],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
