import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtaskComponent } from './addtask/addtask.component';
import { EdittaskComponent } from './edit-task/edit-task.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { ListTaskComponent } from './listtask/listtask.component';
import { ListUsersComponent } from './listusers/listusers.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewUserComponent } from './view-user/view-user.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  { path:'login', component:LoginComponent},
  {path:'users', component:ListUsersComponent},
  {path:'addtask', component:AddtaskComponent},
  {path:'listtask', component:ListTaskComponent},
  {path:'edittask', component:EdittaskComponent},
  {path:'edituser', component:EditUserComponent},
  {path:'viewuser', component:ViewUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
