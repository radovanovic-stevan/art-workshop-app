import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CreateWorkshopComponent } from './create-workshop/create-workshop.component';
import { LoginComponent } from './login/login.component';
import { MyWorkshopsComponent } from './my-workshops/my-workshops.component';
import { OrganizatorComponent } from './organizator/organizator.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UcesnikComponent } from './ucesnik/ucesnik.component';
import { WorkshopsComponent } from './workshops/workshops.component';
//import { UserComponent } from './user/user.component';

const routes: Routes = [
  // {path:'ucesnik', component: UcesnikComponent},
  // {path:'organizator', component: OrganizatorComponent},
  // {path:'admin', component: AdminComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path: 'allWorkshops', component: WorkshopsComponent},
  {path: 'myWorkshops',component: MyWorkshopsComponent},
  {path: 'profile',component: ProfileComponent},
  {path: 'addWorkshop',component: CreateWorkshopComponent},
  {path:'', component: WorkshopsComponent, pathMatch: 'full'},
  {path:'**', component: WorkshopsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
