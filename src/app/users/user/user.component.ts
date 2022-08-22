import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GetAgePipe } from 'src/app/get-age.pipe';
import { UserServesService,User} from 'src/app/user-serves.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
 // @Output() userVM = new EventEmitter<User>();


  public NewUser:User={name:'',age:0,email:'',password:'',dateOfBirthday: new Date()};

  constructor(private service:UserServesService ,public router:Router,public getAge:GetAgePipe) { }

  ngOnInit(): void {
  }
  addUser(form:NgForm){
    if(!form.form.valid){
      form.form.markAllAsTouched();

    
    }

  else {
    this.NewUser.age=this.getAge.transform(this.NewUser.dateOfBirthday);
    this.service.UserList.push(this.NewUser);
    this.router.navigate(['/users/List']);
  }
  
  }

}

