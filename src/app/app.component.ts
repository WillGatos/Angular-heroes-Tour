import { Component } from '@angular/core';
import {NgxImageCompressService} from "ngx-image-compress";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  image: string;
  constructor() {}

  receiveImage($event: string){
    this.image = $event;
  }
}
