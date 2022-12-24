import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpConectionService {

  constructor(private http:HttpClient) { }

  baseURL = "http://localhost:3333/"

  buildUrl(path:String){
    return `${this.baseURL}${path}`
  }

  post(path:String,params:any){
    console.log(this.http.post(this.buildUrl(path),params));
  }


}
