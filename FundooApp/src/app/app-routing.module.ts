import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { NotesComponent } from './components/notes/notes.component';
import { DisplaynotesComponent } from './components/displaynotes/displaynotes.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { EditnotesComponent } from './components/editnotes/editnotes.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'forgetpassword', component: ForgetpasswordComponent},
  {path: 'changePassword/:token', component: ResetpasswordComponent},
  {path: 'dashboard', component: DashboardComponent
},
  {path: 'notes', component: NotesComponent},
  {path: 'displaynote', component: DisplaynotesComponent},
  {path: 'toolbar', component: ToolbarComponent},
  {path: 'editnotes', component: EditnotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
