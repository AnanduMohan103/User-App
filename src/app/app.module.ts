import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes:Routes=[
  {
    path:"",component:SigninComponent
  },
  {
    path:"new",component:SignupComponent
  },
  {
    path:"dash",component:DashComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
