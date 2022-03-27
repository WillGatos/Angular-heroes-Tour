import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {NgxImageCompressService} from "ngx-image-compress";

@Component({
  selector: 'app-image-compressor',
  templateUrl: './image-compressor.component.html',
  styleUrls: ['./image-compressor.component.css']
})
export class ImageCompressorComponent implements OnInit {
  @Input() ratio: number;
  @Input() quality: number;
  @Output() image= new EventEmitter<string>();
  constructor(private imageCompress: NgxImageCompressService) {
  }

  ngOnInit(): void {

  }
  imgResultBeforeCompression: string = "";
  imgResultAfterCompression: string = "";

  compressFile() {
    // The method of uploadFile makes posible to search for the image
    // without the need of a html Element
    this.imageCompress.uploadFile().then(
      ({image, orientation}) => {
        //the promise takes a objecta, up here its destructured in two parts
        this.imgResultBeforeCompression = image;
        console.log("Size in bytes of the uploaded image was:", this.imageCompress.byteCount(image));

        this.imageCompress
          .compressFile(image, orientation, this.ratio, this.quality) // 50% ratio, 50% quality
          .then(
            (compressedImage) => {
              console.log(compressedImage)
              this.image.emit(compressedImage);
              console.log("Size in bytes after compression is now:", this.imageCompress.byteCount(compressedImage));
            }
          );
      }
    );
  }

}
