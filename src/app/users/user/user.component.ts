import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GetAgePipe } from 'src/app/get-age.pipe';
import { UserServesService,User} from 'src/app/user-serves.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
 // @Output() userVM = new EventEmitter<User>();

 UserList:{first_name:string,last_name:string}[]=[];
 id:number=0;
 nextId: number = 0;
 // public NewUser:User={name:'',age:0,email:'',password:'',dateOfBirthday: new Date()};
  NewUser:User={ id: 0,first_name:'',last_name:'',email:'',dateOfBirthday:new Date(),password:'', age:0};

  constructor(private service:UserServesService ,public router:Router,public getAge:GetAgePipe,public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.params['id'];
    if (this.id > 0)
      this.service.returnUser(this.id).subscribe((v: User) => {
        this.NewUser = v;
      })
     
  }
  /*addUser(form:NgForm){
    if(!form.form.valid){
      form.form.markAllAsTouched();

    
    }

  else {
    //this.NewUser.age=this.getAge.transform(this.NewUser.dateOfBirthday);
    this.UserList.push(this.NewUser);
    this.router.navigate(['/users/List']);
  }
  
  }*/
  addUser(form:NgForm){
        
    if(!form.form.valid){
      form.form.markAllAsTouched();
    }
    if(form.form.valid)
   { if(this.id>0){
    this.service.PutUser({...this.NewUser}).subscribe(
      (response) => {
        this.router.navigate(['/users/List']);
      }
    );
   

  }else
    
   { 
    
    this.service
    .PostUser(this.NewUser)
    .subscribe((response) => {this.UserList.push(this.NewUser);
      this.router.navigate(['/users/List']);
    });
   

   

    }
   } 
  }
}