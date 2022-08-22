import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
  
})
export class UserServesService {
  UserList:User[]=[];
  constructor() { }
}
 export interface User {
  name: string;
  age: number;
  email:string;
  password:string;
  dateOfBirthday:Date;
 

}
