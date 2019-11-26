import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  public readonly doGetRequest:(url:string,body:any) => Promise<any>;

  constructor(
    private http: HttpClient
  ) { 
    this.doGetRequest = (url: string, body: any) => {
      return new Promise((res, rej) => {
        this.http.get<any>(`http://localhost:8080/api${url}`, {
          params: body
        }).subscribe(value => {
          res(value);
        })
      });
    }
  }
  //postrequest

  //query
}
