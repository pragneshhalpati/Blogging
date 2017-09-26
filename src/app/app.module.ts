import { BlogService } from '../BlogService';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LogInComponent } from './LogIn/LogIn.component';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router'
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LogInComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo:'/LogIn',
        pathMatch:'full'
      }, 
      {
        path: 'Registration',
        component: RegistrationComponent
      }, {
        path: 'LogIn',
        component: LogInComponent
      },{
        path: 'Home',
        component: HomeComponent
      }
    ])
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
