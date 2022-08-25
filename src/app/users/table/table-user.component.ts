import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { GetAgePipe } from 'src/app/get-age.pipe';
import { User, UserServesService } from 'src/app/user-serves.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html'
})
export class TableUserComponent implements OnInit {
  UserList:{id:number,first_name:string,last_name:string,email:string,age:number,dateOfBirthday:Date,password:string}[]=[];
  
  constructor(public service:UserServesService,public router:Router,public getAge:GetAgePipe) { }
  i:number=0 ;
  ngOnInit(): void {
    //this.Users=this.service.UserList;
    this.service.returnAll().subscribe( data => {
      this.UserList = data;
      this.i = this.UserList.length;
      this.i=this.i;

    });

  }
 // NewUser:{ id?:Number ,name:String, email:String, age:Number, DOB:Date, password:String;}[]=[];
//// Delete 
deleteUser(user:User): void {
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
      this.service.deleteUser(user.id)
      .subscribe();
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success',
      )
    }
  })
    }
    DeleteUser(user: User) {
      let i = this.UserList.indexOf(user);
      if (i >= 0) {
        this.UserList.splice(i, 1);
        this.service.deleteUser(user.id).subscribe();
      }
  
    }
   
/*addUser(user: User) {
  
  this.service.UserList.push(user);
}/*
/*updateUser(user: User){
this.UserToUpdate.emit(user);
}*/
editUser(user: User) {
  this.router.navigate(["users/" + user.id]);
}

}





