import { Register } from './../Registration/Register';
import { RegistrationComponent } from './../Registration/registration.component';
import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../BlogService';
import { Router} from '@angular/router';
import { LogIn } from './LogIn'

@Component({
  selector: 'app-LogIn',
  templateUrl: './LogIn.component.html',
  styleUrls: ['./LogIn.component.css']
})


export class LogInComponent implements OnInit {

  constructor(private blogService:BlogService,private router: Router){}
  ngOnInit() {
  }
  LogInUser={UserName:'',Password:''}
  LogIn(LogInUser):void{
    this.blogService.LogIn(this.LogInUser).then(Response=>{
      if(Response!=null){
        if(Response.UserName==LogInUser.UserName  && Response.Password==LogInUser.Password &&Response!=null){
          this.router.navigate(['/Home'])
         } else{
              alert("UserId or Password Is InCorrect")
            }
      }else{
        alert("UserId or Password Is InCorrect")
      }
        
    })
    }
  
}
