
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GetAgePipe } from './get-age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GetAgePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GetAgePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
