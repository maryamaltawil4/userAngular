import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post, UserServesService } from '../user-serves.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {


   NewPost:Post={ id: 0,title:'',creatDate: new Date()};
   postList:{id:number,title:string,creatDate:Date }[]=[];
   
   constructor(private service:UserServesService ,public router:Router,public activatedRoute: ActivatedRoute) { }
 
   ngOnInit(): void {
     
   }
  /* getPost(form:NgForm){
        if(!form.form.valid){
          form.form.markAllAsTouched();
        }
        else(form.form.valid)
  
       {
        //this.NewUser.age=this.getAge.transform(this.NewUser.dateOfBirthday);
        //this.service.addPost(this.NewPost)
        //.subscribe(post => this.postList.push(post));
       
       } 
      }*/
      getPost(post: Post) {
  
  this.postList.push(post);
  
}
   

   
   
 }