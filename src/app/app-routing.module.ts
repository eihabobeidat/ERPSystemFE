import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavbarComponentComponent } from './Home/main-navbar-component/main-navbar-component.component';
import { VideoMeetComponent } from './Shared/video-meet/video-meet.component';

const routes: Routes = [
  { 
    path:'',component:MainNavbarComponentComponent
  },
  {
    path: 'home', loadChildren: () => import('../app/Modules/homemodule/homemodule.module').then(
      (m) => m.HomemoduleModule,
    )
  },
  {
    path: 'app', loadChildren: () => import('../app/Modules/authentication/authentication.module').then(
      (m) => m.AuthenticationModule,
    )
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
