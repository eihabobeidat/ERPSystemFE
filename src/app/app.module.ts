import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { HeaderComponent } from './Home/contact-component/header/header.component';
import { ContactUsInfoCardComponent } from './Home/contact-component/contact-us-info-card/contact-us-info-card.component';
import { ContactUsFormComponent } from './Home/contact-component/contact-us-form/contact-us-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationComponentngComponent } from './Authentication/authentication-componentng/authentication-componentng.component';
import {MatIconModule} from '@angular/material/icon';
import { SocialLoginModule, GoogleLoginProvider, SocialAuthServiceConfig } from 'angularx-social-login';
import { TestimonialComponent } from './Home/testimonial/testimonial.component';
import { SpinnerComponent } from './Shared/spinner/spinner.component';
import{MatSlideToggleModule} from '@angular/material/slide-toggle'
import { NgImageSliderModule } from 'ng-image-slider';
import { CardComponent } from './Home/about-component/card/card.component';
import {MatSortModule} from '@angular/material/sort';
import { ListComponent } from './Admin/Employee/list/list.component';

import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { HrDashboardComponent } from './Hr/hr-dashboard/hr-dashboard.component';
import { EmployeeDashboardComponent } from './Employee/employee-dashboard/employee-dashboard.component';
import { AdminNavComponent } from './Admin/admin-nav/admin-nav.component';
import { HolidaysSearchComponent } from './Admin/holidays-search/holidays-search.component';
import { ContactusComponent } from './Admin/Contactus/contactus.component';
import { TestimonialManageComponent } from './Admin/testimonial-manage/testimonial-manage.component';
import { Dashboard1Component } from './Admin/dashboard1/dashboard1.component';
import { EditDialogComponent } from './Admin/Employee/edit-dialog/edit-dialog.component';
import { EmployeesLeaveComponent } from './Admin/employees-leave/employees-leave.component';
import { EmployeesReviewComponent } from './Admin/employees-review/employees-review.component';
import { AdminReviewComponent } from './Admin/admin-review/admin-review.component';
//import { AdminModuleModule } from './Admin/admin-module/admin-module.module';

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
    ContactUsFormComponent,
    AuthenticationComponentngComponent,
    TestimonialComponent,
    SpinnerComponent,
    CardComponent,    
    ListComponent,  
    AdminDashboardComponent,
    HrDashboardComponent,
    EmployeeDashboardComponent,
    AdminNavComponent,
    HolidaysSearchComponent,
    ContactusComponent,
    TestimonialManageComponent,
    Dashboard1Component,
    EditDialogComponent,
    EmployeesLeaveComponent,
    EmployeesReviewComponent,
    AdminReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({timeOut:5000, progressAnimation:'increasing'}),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    NgImageSliderModule,
    NgbModule,
    MatIconModule,
    SocialLoginModule,
    MatSlideToggleModule,
    FormsModule,
    MatSortModule,
  ],
  entryComponents:[],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('308405098854-l89f4688c66c9mdfmdvhb595r1jmgfid.apps.googleusercontent.com',{
              //scope: 'profile email'
            })
          }
          //,
          // {
          //   id: FacebookLoginProvider.PROVIDER_ID,
          //   provider: new FacebookLoginProvider('clientId')
          // }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
