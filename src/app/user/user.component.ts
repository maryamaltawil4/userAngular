import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  UserList:User[]=[];
  NewUser:User={name:'',age:0,email:'',password:''};
  constructor() { }

  ngOnInit(): void {
  }
  addUser(form:NgForm){
    if(!form.form.valid){
      form.form.markAllAsTouched();
    
    }
    if(form.form.valid){
    this.UserList.push({...this.NewUser});}
  
  }
  deleteUser(User:User){
    let i  =this.UserList.indexOf(User);
    if(i>=0){
      this.UserList.splice(i,1);
    }
  }

}
interface User {
  name: string;
  age: number;
  email:string;
  password:string;

}
