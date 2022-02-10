import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrDashboardComponent } from '../hr-dashboard/hr-dashboard.component';
import { HrLeaveComponent } from '../hr-leave/hr-leave.component';
import { HrNavComponent } from '../hr-nav/hr-nav.component';
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrModuleRoutingModule { }