import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableUserComponent } from './table/table-user.component';

import { UserComponent } from './user/user.component';



const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'List', component:TableUserComponent},
  {path: 'form', component: UserComponent},
  {path: ':id', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
