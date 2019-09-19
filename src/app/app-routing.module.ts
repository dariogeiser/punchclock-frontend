import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimeManagerComponent } from './components/time-manager/time-manager.component';
import { LoginPageComponent } from './components/login-page/login-page.component';



const routes: Routes = [
  { path: '', component: LoginPageComponent},
  { path: 'time-manager', component: TimeManagerComponent}
]



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