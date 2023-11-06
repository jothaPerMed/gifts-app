import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GifsService {

  private _tagHistory: string[] = [];

  constructor() { }


  get tagHistory() {
    return [...this._tagHistory];
  }

  public searchTag(tag: string): void {
    if (tag.length == 0) return;// Si la busqueda es vacia no se realiza
    this.organizeHistory(tag);
    console.log(this.tagHistory);

  }
  organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    // incluye los tags menos los repetidos
    if (this._tagHistory.includes(tag)) {
      this._tagHistory=this._tagHistory.filter((oldTag)=>oldTag!== tag);
    }
    this._tagHistory.unshift(tag);
    // se utilizan namas que 10
    this._tagHistory = this._tagHistory.splice(0, 10);

  }

}
