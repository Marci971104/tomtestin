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
  testomegindexVisible=false;

  indexForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.indexForm =this.formBuilder.group ( {
    tomeg :[''],
    magassag :[''],
    testomegindex :['']
  });
}


 


  onClickSzamit(){
    let tomeg = Number(this.indexForm.value.tomeg);
    let magassag = Number(this.indexForm.value.magassag);
    let testomegindex = tomeg/Math.pow(magassag/100,2);
    testomegindex=Math.round(testomegindex*10)/10;
    this.indexForm.patchValue({testomegindex:testomegindex});

    console.log(testomegindex);
    this.testomegindexVisible=true;
    
  }

}