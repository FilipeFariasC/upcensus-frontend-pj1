import { Injectable } from '@angular/core';
import { HttpConectionService } from 'src/app/utils/http-conection.service';

@Injectable({
  providedIn: 'root'
})
export class ArquivoUploadService {

  basePath: String = "arquivo/upload";
  

  constructor(private httpservice: HttpConectionService) { }



  upload(file: File) {
    let formData = new FormData(); 
    formData.append("file", file, file.name);

    
    this.httpservice.post(this.basePath,formData);

  }


}
