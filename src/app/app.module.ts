import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
	  FormsModule,
	  BrowserModule,
    AppRoutingModule,
	ReactiveFormsModule
  ],
  providers: [
	  FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
