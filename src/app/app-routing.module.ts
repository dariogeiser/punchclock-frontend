import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimeManagerComponent } from './components/time-manager/time-manager.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full'},
  { path: 'home', component: TimeManagerComponent, canActivate: [AuthGuard] },
  { path: 'login-page', component: LoginPageComponent}
 
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [

  ]
})
export class AppRoutingModule { }