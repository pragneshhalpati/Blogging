
import { Component, OnInit } from '@angular/core';
import { Register } from './Register';
import { BlogService } from '../../BlogService';
import {Location} from '@angular/common';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  constructor(private blogService:BlogService,private _location:Location) {  }
  ngOnInit() {
  }
  //user:{FirstName:string,LastName:string,UserName:string,Email:string,Password:string,ConfirmPassword:string};

 user = {
  Name:'',
  Email:'',
  UserName:'',
  Password:'',
  ContactNo:0,
  Address:'',
  ConfirmPassword:''
}

/*
@Register Method call For Register user
@For The User Registration call from the Registration html
@parametes user object to pass to the server side
@return as Object
*/
  Register(user:Register):void{
    debugger
     this.blogService.Register(user).then(response=>{
       return Promise.resolve(true);
// this.goback()
     })
  }
goback(){
  this._location.back();
}
  
}
