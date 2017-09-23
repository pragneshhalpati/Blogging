import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../BlogService';
@Component({
  selector: 'app-LogIn',
  templateUrl: './LogIn.component.html',
  styleUrls: ['./LogIn.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private blogService:BlogService) {  }

  ngOnInit() {
  }
LogInUser={UserName:'',Password:''}

LogIn(LogInUser):void{
  debugger
this.blogService.LogIn(LogInUser).then(test=>{
  debugger
})
}
}
