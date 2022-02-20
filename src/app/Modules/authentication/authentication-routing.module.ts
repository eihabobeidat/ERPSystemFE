import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeDashboardComponent } from 'src/app/Employee/employee-dashboard/employee-dashboard.component';
import { HrDashboardComponent } from 'src/app/Hr/hr-dashboard/hr-dashboard.component';
import { AdminAuthenticationGuard } from '../AdminGaurd/admin-authentication.guard';
import { EmployeeAuthenticationGuard } from '../EmployeeGaurd/employee-authentication.guard';
import { HrAuthenticationGuard } from '../HrGaurd/hr-authentication.guard';

const routes: Routes = [
  {
    path:'admin',loadChildren: () => import('../../Admin/admin-module/admin-module.module').then(
      (m) => m.AdminModuleModule), canActivate: [AdminAuthenticationGuard]
  },
  {

    path:'hr',loadChildren: () => import('../../Hr/hr-module/hr-module.module').then(
      (m) => m.HrModuleModule), canActivate:[HrAuthenticationGuard]

  },
  {
    path:'employee',loadChildren: () => import('../../Employee/employee-module/employee-module.module').then(
      (m) => m.EmployeeModuleModule), canActivate: [EmployeeAuthenticationGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
