import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpClientModule as http } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

const GIPH_API_KEY : string='IGC6SXc8BEG7LgDUvXbc62xUDMLSExay';
const SERVICE_GIPHY : string='https://api.giphy.com/v1/gifs';

@Injectable({ providedIn: 'root' })
export class GifsService {

  private _tagHistory: string[] = [];

  public gifList : Gif[] = [];


  constructor(private http: HttpClient) { }


  get tagHistory() {
    return [...this._tagHistory];
  }

  public searchTag(tag: string): void {
    if (tag.length == 0) return;// Si la busqueda es vacia no se realiza
    this.organizeHistory(tag);

    //Utilizar el fech para obtener los datos de la peticion post
    // fetch('https://api.giphy.com/v1/gifs/search?api_key=IGC6SXc8BEG7LgDUvXbc62xUDMLSExay&q=valorant&limit=10')
    // .then(resp=>resp.json())
    // .then(data=>console.log(data));
    // console.log(this.tagHistory);
    const params = new HttpParams()
    .set('api_key',GIPH_API_KEY)
    .set('limit','10')
    .set('q',tag)
    this.http.get<SearchResponse>(`${SERVICE_GIPHY}/search`, {params: params})
    .subscribe(res=>{
      console.log(res.data);
      this.gifList=res.data;
    },fail=>{
      console.log(fail);

    })

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
    this.searchLocalStorage();

  }

  private searchLocalStorage():void{
    localStorage.setItem('history', JSON.stringify(this._tagHistory))
  }

}
