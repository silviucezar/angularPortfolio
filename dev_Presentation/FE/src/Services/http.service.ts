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
      const header = new HttpHeaders()
      header.set("Content-Type", "text/plain")
      header.set("Accept", "text/plain")
      this.http.get<any>(`http://localhost:8080/api${url}`, body).subscribe(value => {
        res(value);
      });
    });
  }
}
