import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableUserComponent } from './users/table/table-user.component';


const routes: Routes = [
  {path:"users",loadChildren:()=>import('./users/users.module').then(c=>c.UsersModule)}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
