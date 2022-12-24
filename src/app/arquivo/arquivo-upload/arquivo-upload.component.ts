
import { Component, OnInit } from '@angular/core';
import { ArquivoUploadService } from './arquivo-upload.service';

@Component({
  selector: 'app-arquivo-upload',
  templateUrl: './arquivo-upload.component.html',
  styleUrls: ['./arquivo-upload.component.css']
})
export class ArquivoUploadComponent implements OnInit {
  file!: File;
  constructor(private uploadservice: ArquivoUploadService) { }


  onChange(event: any) {
    this.file = event.target.files[0];
  }

  upload(){
    this.uploadservice.upload(this.file);
  }
  ngOnInit(): void {

  }

}
