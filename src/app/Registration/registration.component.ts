
import { Component, OnInit } from '@angular/core';
import { Register } from './Register';
import { BlogService } from '../../BlogService';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  constructor(private blogService:BlogService) {  }
  ngOnInit() {
  }
  //user:{FirstName:string,LastName:string,UserName:string,Email:string,Password:string,ConfirmPassword:string};

 user = {
  Name:'',
  Email:'',
  UserName:'',
  Password:'',
  ContactNo:'',
  Address:''
}
  add(user):void{
    
     this.blogService.create(user).then(abc => {
    
    });
  }

  
}
