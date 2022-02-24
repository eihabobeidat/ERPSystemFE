import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAttendanceComponent } from 'src/app/Admin/employee-attendance/employee-attendance.component';
import { ListComponent } from 'src/app/Admin/Employee/list/list.component';
import { SalaryListComponent } from 'src/app/Admin/Salary/salary-list/salary-list.component';
import { EmployeeProfileComponent } from 'src/app/Employee/employee-profile/employee-profile.component';
import { ChatBoxComponent } from 'src/app/Shared/chat-box/chat-box.component';
import { HrDashboardComponent } from '../hr-dashboard/hr-dashboard.component';
import { HrLeaveComponent } from '../hr-leave/hr-leave.component';
import { HrNavComponent } from '../hr-nav/hr-nav.component';
import { HrProfileComponent } from '../hr-profile/hr-profile.component';
import { HrRegisterEmployeeComponent } from '../hr-register-employee/hr-register-employee.component';
import { HrReviewComponent } from '../hr-review/hr-review.component';

const routes: Routes = [
  {
    path:'', component: HrNavComponent,
    children: [
      {
        path:'', component: HrDashboardComponent
      },
      { 
        path : 'review', component : HrReviewComponent
      },
      { 
        path:'leave', component: HrLeaveComponent
      },
      {
        path:'employee', component: HrRegisterEmployeeComponent
      },
      {
        path:'profile', component: EmployeeProfileComponent
      },
      {
        path:'salary', component: SalaryListComponent
      },
      {
        path:'ManageEmployee', component:ListComponent
      },
      {
        path:'attendance', component:EmployeeAttendanceComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrModuleRoutingModule { }
