import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminNavComponent } from '../admin-nav/admin-nav.component';
import { AdminReviewComponent } from '../admin-review/admin-review.component';
import { EmployeesLeaveComponent } from '../employees-leave/employees-leave.component';

const routes: Routes = [
  {
    path:'', component: AdminNavComponent,
    children: [
      { 
        path : 'review', component : AdminReviewComponent
      },
      { 
        path:'leave', component: EmployeesLeaveComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
