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
