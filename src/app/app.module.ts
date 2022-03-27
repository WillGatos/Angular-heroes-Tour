import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgxImageCompressService} from "ngx-image-compress";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageCompressorComponent } from './image-compressor/image-compressor.component';
import { ImageBufferComponent } from './image-buffer/image-buffer.component';

// import { HeroesComponent } from './heroes/heroes.component';
// import { HeroDetailsComponent } from './hero-details/hero-details.component';
// import { MessagesComponent } from './messages/messages.component';
// import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageCompressorComponent,
    ImageBufferComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [NgxImageCompressService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
    // HeroesComponent,
    // HeroDetailsComponent,
    // MessagesComponent,
    // DashboardComponent,
