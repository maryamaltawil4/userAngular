import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserServesService } from 'src/app/user-serves.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html'
})
export class TableUserComponent implements OnInit {
 
  constructor(public service:UserServesService,public router:Router) { }
 Users:{name:string,age:number,email:string,password:string, dateOfBirthday?:Date}[]=[];

  ngOnInit(): void {
    this.Users=this.service.UserList;

  }
 
  NewUser:{ id?:Number ,name:String, email:String, age:Number, DOB:Date, password:String;}[]=[];

  

//// Delete 
deleteUser(user:User) {
  let i  =this.service.UserList.indexOf(user);
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
      this.service.UserList.splice(i,1);
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success',
      )
    }
  })
    }
/*addUser(user: User) {
  
  this.service.UserList.push(user);
}/*
/*updateUser(user: User){
this.UserToUpdate.emit(user);
}*/

}





