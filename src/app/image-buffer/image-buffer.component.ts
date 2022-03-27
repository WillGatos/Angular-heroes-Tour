import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-buffer',
  templateUrl: './image-buffer.component.html',
  styleUrls: ['./image-buffer.component.css']
})
export class ImageBufferComponent implements OnInit {
  @Input() imageCompressed: string;
  constructor() { }

  ngOnInit(): void {
  }

}
