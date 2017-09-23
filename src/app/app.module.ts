import { BlogService } from '../BlogService';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LogInComponent } from './LogIn/LogIn.component';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LogInComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'Registration',
        component: RegistrationComponent
      }, {
        path: 'LogIn',
        component: LogInComponent
      }
    ])
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
