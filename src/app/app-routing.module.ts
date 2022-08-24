import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { TableUserComponent } from './users/table/table-user.component';


const routes: Routes = [
  {path:"users",loadChildren:()=>import('./users/users.module').then(c=>c.UsersModule)},
  { path: 'Posts', component:PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
