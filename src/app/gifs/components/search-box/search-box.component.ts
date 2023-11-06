import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5></h5>
  <input type="text"
  class="form-control"
  placeholder="Buscar gifs..."
  (keyup.enter)="searchTag()"
  #txtTagInput>
  `
})

export class SearchBoxComponent  {
  constructor() { }

@ViewChild('txtTagInput')
public tagInput!:ElementRef<HTMLInputElement>;

  searchTag(){
    const nuevaBusqueda = this.tagInput.nativeElement.value
    console.log({nuevaBusqueda});


  }
}
