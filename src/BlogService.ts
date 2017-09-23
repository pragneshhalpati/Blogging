import { LogIn } from './app/LogIn/LogIn';
import { Register } from './app/Registration/Register';
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BlogService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private BlogUrl = 'http://localhost:3040/';  // URL to web api

  constructor(private http: Http) { }


  /*
@Register Method call For Register user from the registration page
@For The User Registration call from the Registration Component and pass to the http.post method
@parametes user object to pass to the server side
@return as Object
*/

  Register(User:Register): Promise<Register> {
    //var a=JSON.stringify({User});
    debugger
    return this.http
      .post(this.BlogUrl + 'InsertRegistration',User, {headers: this.headers})
      .toPromise()
      .catch(this.handleError);
  }

  /*
@LogIn Method call For Login user from the Login Page
@For The User LogIn call from the LogIn Component and pass to the http.post method fro LogIn User
@parametes user object to pass to the server side and Get back the Result
@return as Object
*/
  LogIn(LogInUser:LogIn): Promise<LogIn> {
    return this.http
      .post(this.BlogUrl + 'login',LogInUser, {headers: this.headers})
      .toPromise()
      .catch(this.handleError);


      
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}