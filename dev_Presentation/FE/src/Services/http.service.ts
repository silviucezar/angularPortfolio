import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  getRequest(url: string, body: any): Promise<any> {
    return new Promise((res, rej) => {
      this.http.get<any>(`http://localhost:8080/api${url}`,{
        params : body,
        headers: new HttpHeaders({
          "Accept" : "video/mp4"
        }),
        responseType : "arraybuffer" as any
      }).subscribe(value =>{
        console.log(value)
      })
    });
  }
}
