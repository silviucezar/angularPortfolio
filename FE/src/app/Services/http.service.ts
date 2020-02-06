import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  doGetRequest<T>(url: string, body: any) {
    return this.http.get<T>(`${location.origin}/api/${url}`, {
      params: body
    }).toPromise();
  }
}
