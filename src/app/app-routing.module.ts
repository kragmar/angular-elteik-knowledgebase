import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from  './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { MapComponent } from './map/map.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component:  ForgotPasswordComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'curriculum', component: CurriculumComponent },
  { path: 'map', component: MapComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
