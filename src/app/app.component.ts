import { Component, Input } from '@angular/core';
import { User } from './user/user.component';


 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
title='test';
@Input() UserList: User[] = [];

deleteUser(user:User){
  let i  =this.UserList.indexOf(user);
  if(i>=0){
    this.UserList.splice(i,1);
  }
}
addUser(user: User) {
  this.UserList.push(user);
}

}


