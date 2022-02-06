import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeDashboardComponent } from 'src/app/Employee/employee-dashboard/employee-dashboard.component';
import { HrDashboardComponent } from 'src/app/Hr/hr-dashboard/hr-dashboard.component';

const routes: Routes = [
  {
    path:'admin',loadChildren: () => import('../../Admin/admin-module/admin-module.module').then(
      (m) => m.AdminModuleModule),
  },
  {
    path:'hr',component:HrDashboardComponent
  },
  {
    path:'employee',component:EmployeeDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
