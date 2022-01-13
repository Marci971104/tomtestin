/*
* File: app.components.ts
* Author: Rohrbacher Marcell
* Copyright: 2022, Rohrbacher Marcell
* Group: Szoft II/N
* Date: 2022-01-013
* Github: https://github.com/Marci971104
*/

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tomtestin';
  testtomegindexVisible=false;

  indexForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.indexForm =this.formBuilder.group ( {
    tomeg :[''],
    magassag :[''],
    testtomegindex :['']
  });
}


 


  onClickSzamit(){
    let tomeg = Number(this.indexForm.value.tomeg);
    let magassag = Number(this.indexForm.value.magassag);
    let testtomegindex = tomeg/Math.pow(magassag/100,2);
    testtomegindex=Math.round(testtomegindex*10)/10;
    this.indexForm.patchValue({testtomegindex:testtomegindex});

    console.log(testtomegindex);
    this.testtomegindexVisible=true;
    
  }

}