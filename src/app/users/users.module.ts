import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { FormsModule } from '@angular/forms';
import { TableUserComponent } from './table/table-user.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    TableUserComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ]
})
export class UsersModule { }
