import { Component, Input } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { Gif } from 'src/app/gifs/interfaces/gifs.interfaces';

@Component({
  selector: 'share-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


public tagHistory :string[] = [];
constructor(private gifsService :GifsService){

}

get tags():string[]{
  return this.gifsService.tagHistory;
}

public searchTags(tag : string):void{
  this.gifsService.searchTag(tag);
}




}
