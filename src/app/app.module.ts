import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { ListTaskComponent } from './listtask/listtask.component';
import { ListUsersComponent } from './listusers/listusers.component';
import { HeaderComponent } from './header/header.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EdittaskComponent } from './edit-task/edit-task.component';
import { HomeComponent } from './home/home.component';
import { ViewUserComponent } from './view-user/view-user.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AddtaskComponent,
    ListTaskComponent,
    ListUsersComponent,
    HeaderComponent,
    EditUserComponent,
    EdittaskComponent,
    HomeComponent,
    ViewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
