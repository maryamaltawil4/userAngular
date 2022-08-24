import { Injectable } from '@angular/core';
import{HttpClient} from  '@angular/common/http';
import { Observable } from 'rxjs';
import { getLocaleDateFormat } from '@angular/common';
import { Data } from '@angular/router';
@Injectable({
  providedIn: 'root'
  
})
export class UserServesService {
 
  //UserList:User[]=[];
  constructor(private http:HttpClient) { }

  public returnAll(): Observable<User[]>{
    return this.http.get<User[]>("https://localhost:7003/api/UserConroller");
   } 
   public addUser(user:User){
    return this.http.post<User>("https://localhost:7003/api/UserConroller",user);
   } 
   returnUser(id: number): Observable<User> {
    return this.http.get<User>("https://localhost:7003/api/UserConroller" + "/" + id);
}
 deleteUer(user:User){
  return this.http.delete("https://localhost:7003/api/UserConroller");
 }
    updateUser(user: User) {
    return this.http.put("https://localhost:7003/api/UserConroller", user);
}
public getPost(): Observable<Post[]>{
  return this.http.get<Post[]>("https://localhost:7003/api/Post/GetAll");
 } 

 public addPost(post:Post){
  return this.http.post<Post>("https://localhost:7003/api/Post/Create",post);
 } 

}
 export interface User {
  id:number;
  first_name: string;
  last_name: string;
  age:number;
  dateOfBirthday:Date;
  email: string;
  password:string;
}
export interface Post {
  id:number;
  title:string;
  creatDate: Date;

}

