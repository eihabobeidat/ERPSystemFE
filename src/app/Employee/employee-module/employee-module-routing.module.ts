import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from '../employee-dashboard/employee-dashboard.component';
import { EmployeeHolidaysSearchComponent } from '../employee-holidays-search/employee-holidays-search.component';
import { EmployeeNavComponent } from '../employee-nav/employee-nav.component';
import { EmployeeProfileComponent } from '../employee-profile/employee-profile.component';

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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeModuleRoutingModule { }
