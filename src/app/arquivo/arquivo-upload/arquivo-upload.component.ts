
import { Component, OnInit } from '@angular/core';
import { ArquivoUploadService } from './arquivo-upload.service';
import { JobResponse } from './arquivo.model';

@Component({
  selector: 'app-arquivo-upload',
  templateUrl: './arquivo-upload.component.html',
  styleUrls: ['./arquivo-upload.component.css']
})
export class ArquivoUploadComponent {

  private file!: File;
  private _job: any;
  constructor(private arquivoUploadService: ArquivoUploadService) { }

  public get job(): JobResponse {
    return this._job;
  }

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  upload(){
    this.arquivoUploadService.upload(this.file)
      .subscribe(res=>this._job=res);
  }

}
