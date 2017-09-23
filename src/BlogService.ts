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

  create(User:Register): Promise<Register> {
    //var a=JSON.stringify({User});
    debugger
    return this.http
      .post(this.BlogUrl + 'InsertRegistration',User, {headers: this.headers})
      .toPromise()
      .then()
      .catch(this.handleError);
  }
  LogIn(LogInUser:LogIn): Promise<LogIn> {
    //var a=JSON.stringify({User});
    debugger
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