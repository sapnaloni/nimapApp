import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';
import { ThankComponent } from './components/thank/thank.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent

  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'user',
    component: UserComponent
  },
  {
    path:'thank',
    component: ThankComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
