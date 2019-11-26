import { Injectable } from '@angular/core';
import { Resolve , ActivatedRoute} from '@angular/router';
import { HttpService } from 'src/Services/http.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InitialDataService implements Resolve<any> {

  constructor(
    private http:HttpService
    // private activatedRoute : ActivatedRoute,
  ) { }
   resolve() : Observable<any> | any {
    return this.http.doGetRequest("/","")
    .then(result =>{
      return result
    })
    .catch(e=>{
      console.log(e)
    })
   }
}
