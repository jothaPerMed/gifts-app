import { NgModule } from '@angular/core';
import { HttpClientModule as http  } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GifsModule,
    SharedModule,
    http
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
