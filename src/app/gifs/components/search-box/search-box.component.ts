import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

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
  constructor(private gifsService: GifsService) { }

@ViewChild('txtTagInput')
public tagInput!:ElementRef<HTMLInputElement>;

  searchTag(){
    const nuevaBusqueda = this.tagInput.nativeElement.value
    this.gifsService.searchTag(nuevaBusqueda);
    this.tagInput.nativeElement.value='';

  }
}
