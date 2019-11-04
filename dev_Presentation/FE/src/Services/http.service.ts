import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http:HttpClient
  ) { }

  getRequest(url:string, body:any) : Promise<any> {
    return new Promise ((res,rej)=>{
      console.log(url)
      this.http.get<any>(`http://localhost:8080/api${url}`,{ params:{ a: "2"}}).subscribe(value =>{
        res(value);
      });
    });
  }
}
