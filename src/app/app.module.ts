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
import { SocialLoginModule, GoogleLoginProvider, SocialAuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';
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
import { EditDialogComponent } from './Admin/Employee/edit-dialog/edit-dialog.component';
import { EmployeesLeaveComponent } from './Admin/employees-leave/employees-leave.component';
import { EmployeesReviewComponent } from './Admin/employees-review/employees-review.component';
import { ImagesliderManageComponent } from './Admin/imageslider-manage/imageslider-manage.component';
import { AboutManageComponent } from './Admin/about-manage/about-manage.component';
import { CellmanageComponent } from './Admin/cellmanage/cellmanage.component';
import { AdminReviewComponent } from './Admin/admin-review/admin-review.component';
//////
import { TakeAttendenceComponent } from './Employee/take-attendence/take-attendence.component';
import * as echarts from 'echarts';
import 'echarts-gl';
import 'echarts/theme/macarons.js';
import 'echarts/dist/extension/bmap.min.js';
import { NgxEchartsModule } from 'ngx-echarts';
import { FlowerChartComponent } from './Admin/admin-dashboard/flower-chart/flower-chart.component';
import { TakeLeaveComponent } from './Employee/take-leave/take-leave.component';
import { MyLeaveComponent } from './Employee/my-leave/my-leave.component';
import { CardEmployeeInfComponent } from './Employee/take-attendence/card-employee-inf/card-employee-inf.component';
import { EmployeeNavComponent } from './Employee/employee-nav/employee-nav.component';
import { EmployeeHolidaysSearchComponent } from './Employee/employee-holidays-search/employee-holidays-search.component';
import { EmployeeProfileComponent } from './Employee/employee-profile/employee-profile.component';
import { CardsComponent } from './Employee/employee-dashboard/cards/cards.component';
import { HrLeaveComponent } from './Hr/hr-leave/hr-leave.component';
import { HrReviewComponent } from './Hr/hr-review/hr-review.component';
import { HrRegisterEmployeeComponent } from './Hr/hr-register-employee/hr-register-employee.component';
import { HrNavComponent } from './Hr/hr-nav/hr-nav.component';
import { EmpReviewComponent } from './Employee/emp-review/emp-review.component';
import { QualificationComponent } from './Employee/qualification/qualification.component';

import { AdminEmailComponent } from './Admin/admin-email/admin-email.component';
import { ChatBoxComponent } from './Shared/chat-box/chat-box.component';
// Import the echarts core module, which provides the necessary interfaces for using echarts.
// import * as echarts from 'echarts/core';
// // Import bar charts, all with Chart suffix
// import { BarChart } from 'echarts/charts';
// import { TitleComponent, TooltipComponent, GridComponent } from 'echarts/components';
// // Import the Canvas renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
// import { CanvasRenderer } from 'echarts/renderers';
// import 'echarts/theme/macarons.js';
//////
// import { AngularFileUploaderModule } from "angular-file-uploader";


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
    ImagesliderManageComponent,
    AboutManageComponent,
    CellmanageComponent,
    EditDialogComponent,
    EmployeesLeaveComponent,
    EmployeesReviewComponent,
    AdminReviewComponent,
    FlowerChartComponent,
    TakeLeaveComponent,
    MyLeaveComponent,
    CardComponent,
    CardEmployeeInfComponent,
    TakeAttendenceComponent,
    EmployeeNavComponent,
    EmployeeHolidaysSearchComponent,
    EmployeeProfileComponent,
    CardsComponent,
    HrLeaveComponent,
    HrReviewComponent,
    HrRegisterEmployeeComponent,
    HrNavComponent,
    EmpReviewComponent,
    QualificationComponent,
    AdminEmailComponent,
    ChatBoxComponent,
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
    NgxEchartsModule.forRoot({ echarts: () => import('echarts'), }),
    // AngularFileUploaderModule
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
          ,
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('1097438861006456')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
