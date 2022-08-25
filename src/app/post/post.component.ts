import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService, PostView } from 'src/typescript-angular-client-generated';
import { UserServesService } from '../user-serves.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {


   //NewPost:Post={ title:'',creatDate: new Date()};
   //postList:{title:string | undefined,creatDate:Date }[]=[];
    postList?:PostView[];
    post?: PostView;
   constructor(private service:UserServesService ,public router:Router,public activatedRoute: ActivatedRoute,public postService: PostService) { }
 
   ngOnInit(): void {
    this.postService.apiPostGetAllGet().subscribe(Post => this.postList = Post);

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
      getPost() {
  
        var _username= document.getElementById("postcon")!.textContent;
        if (_username) this.post!.title= _username; 
        this.postService.apiPostCreatePost(this.post).subscribe();
        
        
}
   

   
   
 }