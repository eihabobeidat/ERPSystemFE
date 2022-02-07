import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { AdminNavComponent } from '../admin-nav/admin-nav.component';
import { AdminReviewComponent } from '../admin-review/admin-review.component';
import { ContactusComponent } from '../Contactus/contactus.component';
import { ListComponent } from '../Employee/list/list.component';
import { EmployeesLeaveComponent } from '../employees-leave/employees-leave.component';
import { HolidaysSearchComponent } from '../holidays-search/holidays-search.component';
import { TestimonialManageComponent } from '../testimonial-manage/testimonial-manage.component';

const routes: Routes = [
  {
    path:'', component: AdminNavComponent,
    children: [
      {
        path:'dashboard', component: AdminDashboardComponent
      },
      { 
        path : 'review', component : AdminReviewComponent
      },
      { 
        path:'leave', component: EmployeesLeaveComponent
      },
      {
        path:'holidays', component: HolidaysSearchComponent
      },
      {
        path:'feedback', component: ContactusComponent
      },
      {
        path:'testimonial', component: TestimonialManageComponent
      },
      {
        path:'employee', component: ListComponent
      },
      
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
