import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Output() userVM = new EventEmitter<User>();
  
  public NewUser:User={name:'',age:0,email:'',password:''};
  constructor() { }

  ngOnInit(): void {
  }
  addUser(form:NgForm){
    if(!form.form.valid){
      form.form.markAllAsTouched();
    
    }
  
  else
    this.userVM.emit(this.NewUser);
  
  }
  

}
export interface User {
  name: string;
  age: number;
  email:string;
  password:string;

}
