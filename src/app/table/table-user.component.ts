import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';

interface User {
  name: string;
  age: number;
  email:string;
  password:string;
 

}

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html'
})
export class TableUserComponent implements OnInit {
  public UserList:User[]=[
    {
      name:'maryam', age:20, email:'maryam@gamil ',password:'123maryam'
  
    },
  
    {
      name:'tala', age:21 ,email:'tala@gmail', password:'123tala',
  
    } 
    ];
  
  constructor() { }

  ngOnInit(): void {
  }
 
  public NewUser:User={name:'',age:0,email:'',password:''};
 
  

//// Delete 
deleteUser(user:User) {
  let i  =this.UserList.indexOf(user);
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed && i>=0) {
      this.UserList.splice(i,1);
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success',
      )
    }
  })
    }
addUser(user: User) {
  this.UserList.push(user);
}
/*updateUser(user: User){
this.UserToUpdate.emit(user);
}*/

}





