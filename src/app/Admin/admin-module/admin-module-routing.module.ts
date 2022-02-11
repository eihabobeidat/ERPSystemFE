import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatBoxComponent } from 'src/app/Shared/chat-box/chat-box.component';
import { AboutManageComponent } from '../about-manage/about-manage.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { AdminNavComponent } from '../admin-nav/admin-nav.component';
import { AdminProfileComponent } from '../admin-profile/admin-profile.component';
import { AdminReviewComponent } from '../admin-review/admin-review.component';
import { CellmanageComponent } from '../cellmanage/cellmanage.component';
import { ContactusComponent } from '../Contactus/contactus.component';
import { ListComponent } from '../Employee/list/list.component';
import { EmployeesLeaveComponent } from '../employees-leave/employees-leave.component';
import { HolidaysSearchComponent } from '../holidays-search/holidays-search.component';
import { ImagesliderManageComponent } from '../imageslider-manage/imageslider-manage.component';
import { TestimonialManageComponent } from '../testimonial-manage/testimonial-manage.component';

const routes: Routes = [
  {
    path:'', component: AdminNavComponent,
    
    children: [
      {
        path:'', component: AdminDashboardComponent
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
      {
        path:'cell', component: CellmanageComponent
      },
      {
        path:'about', component: AboutManageComponent
      },
      {
        path:'slider', component: ImagesliderManageComponent
      },
      {
        path:'profile', component: AdminProfileComponent
      }   
        path:'chat', component: ChatBoxComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
