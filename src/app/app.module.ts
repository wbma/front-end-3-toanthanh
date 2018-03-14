import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ListMediaComponent } from './list-media/list-media.component';
import { MediaService } from './services/media.service';
import { HttpClientModule } from '@angular/common/http';
import { DigitransitItService } from './services/digitransit-it.service';


@NgModule({
  declarations: [
    AppComponent,
    ListMediaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MediaService, DigitransitItService],
  bootstrap: [AppComponent]
})
export class AppModule { }
