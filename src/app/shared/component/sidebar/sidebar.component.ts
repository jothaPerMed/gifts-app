import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'share-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


public tagHistory :string[] = [];
constructor(private gifsService :GifsService){

}

get tags(){
  return this.gifsService.tagHistory;
}




}
