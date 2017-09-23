import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../BlogService';
import { Router} from '@angular/router';

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
    this.blogService.LogIn(LogInUser).then(Response=>{
  
      this.router.navigate(['/Home'])
    })
    }
  
}
