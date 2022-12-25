import { JobResponse } from './arquivo.model';
import { Injectable } from '@angular/core';
import { HttpConectionService } from 'src/app/utils/http-conection.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArquivoUploadService {

  private basePath = `${environment.baseUrl}/arquivo/upload`;

  constructor(private _httpClient: HttpClient) { }

  private get httpClient() {
    return this._httpClient;
  }

  upload(file: File): Observable<JobResponse> {
    let formData = new FormData();
    formData.append("arquivo", file, file.name);

    return this.httpClient.post<JobResponse>(this.basePath, formData);
  }

}
