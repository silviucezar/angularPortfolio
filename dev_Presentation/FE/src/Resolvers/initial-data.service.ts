import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/Services/http.service';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InitialDataService implements Resolve<any> {


  // private InitialData: BehaviorSubject<any> = new BehaviorSubject("");
  // public InitialData$: Observable<any>

  constructor
    (
      private http: HttpService
    ) {
    // this.InitialData$ = this.InitialData.asObservable();
  }
  resolve(): Observable<any> | any {
    return this.http.doGetRequest("/",{
      locale : "ro_ro",
      prefix : "intro_"
    })
      .then(result => {
        return result;
      })
      .catch(e => {
        console.log(e)
      })
  }
}
