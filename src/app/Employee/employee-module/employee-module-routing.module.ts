import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { takeLast } from 'rxjs';
import { SalaryListComponent } from 'src/app/Admin/Salary/salary-list/salary-list.component';
import { HrRegisterEmployeeComponent } from 'src/app/Hr/hr-register-employee/hr-register-employee.component';
import { ChatBoxComponent } from 'src/app/Shared/chat-box/chat-box.component';
import { EmpReviewComponent } from '../emp-review/emp-review.component';
import { EmployeeDashboardComponent } from '../employee-dashboard/employee-dashboard.component';
import { EmployeeHolidaysSearchComponent } from '../employee-holidays-search/employee-holidays-search.component';
import { EmployeeNavComponent } from '../employee-nav/employee-nav.component';
import { EmployeeProfileComponent } from '../employee-profile/employee-profile.component';
import { FeedbackComponent } from '../feedback/feedback.component';
import { MyLeaveComponent } from '../my-leave/my-leave.component';
import { QualificationComponent } from '../qualification/qualification.component';
import { TakeAttendenceComponent } from '../take-attendence/take-attendence.component';
import { TakeLeaveComponent } from '../take-leave/take-leave.component';


const routes: Routes = [
  {
    path:'', component: EmployeeNavComponent,

     
    children: [
      {
        path:'', component:EmployeeDashboardComponent
      },
      {
        path:'holidays', component:EmployeeHolidaysSearchComponent 
      },
      {
        path:'profile', component:EmployeeProfileComponent 
      },
      {
        path:'leavelist',component:MyLeaveComponent
      },
      {
        path:'attendence',component:TakeAttendenceComponent
      },
      {
        path:'leave',component:TakeLeaveComponent
      },
      {
        path:'evaluation',component:EmpReviewComponent
      },
      {
        path:'chat', component: ChatBoxComponent
      },
      {
        path:'qualification',component:QualificationComponent
      },
      {
        path:'feedback', component:FeedbackComponent
      },
      {
        path:'Esalary', component: SalaryListComponent
        
      },
      {
        path:'Eedit', component: HrRegisterEmployeeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeModuleRoutingModule { }
