import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticateService, LoginModel } from 'src/typescript-angular-client-generated';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public NewUser: LoginModel = { username: '', password: '' };
  constructor(public authenticate: AuthenticateService) { }

  ngOnInit(): void {
  }
  login(form: NgForm) {
    if (form.form.valid) {
      this.NewUser.username = form.value.username;
      this.NewUser.password = form.value.password;
      this.authenticate.apiAuthenticateLoginPost(this.NewUser).subscribe();
      //more than time 
      localStorage.setItem('name', this.NewUser.username);
      localStorage.setItem('password', this.NewUser.password);



    }
  }

}
