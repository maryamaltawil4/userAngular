
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GetAgePipe } from './get-age.pipe';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GetAgePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
