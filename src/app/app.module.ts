/*
* File: app.module.ts
* Author: Rohrbacher Marcell
* Copyright: 2022, Rohrbacher Marcell
* Group: Szoft II/N
* Date: 2022-01-013
* Github: https://github.com/Marci971104
*/

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
