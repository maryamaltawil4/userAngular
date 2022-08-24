import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { FormsModule } from '@angular/forms';
import { TableUserComponent } from './table/table-user.component';
import { UserComponent } from './user/user.component';
import { GetAgePipe } from '../get-age.pipe';


@NgModule({
  declarations: [
    TableUserComponent,
    UserComponent,
    GetAgePipe
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ]
})
export class UsersModule { }
