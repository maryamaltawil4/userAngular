
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GetAgePipe } from './get-age.pipe';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { LoginComponent } from './login/login.component';
import { ApiModule, BASE_PATH } from 'src/typescript-angular-client-generated';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    LoginComponent,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ApiModule
  ],
  providers: [GetAgePipe] ,// [BASE_PATH, useValue: environment.API_BASE_PATH],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
