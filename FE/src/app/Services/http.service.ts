import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { RequestDetails } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  private requestDetails:RequestDetails = {
    activeRequestCount : 0,
    url:''
  }
  public activeRequestsCount$: BehaviorSubject<RequestDetails> = new BehaviorSubject<RequestDetails>(this.requestDetails);

  constructor(
    private http: HttpClient
  ) { }

  doGetRequest<T>(url: string, body: any) {
    this.requestDetails.activeRequestCount = this.requestDetails.activeRequestCount + 1
    this.activeRequestsCount$.next(this.requestDetails);
    return this.http.get<T>(`${location.origin}/api/${url}`, {
      params: body
    }).pipe(finalize(() => {
      this.requestDetails.activeRequestCount = this.requestDetails.activeRequestCount -1;
      if (url === 'getMetadata') {
        this.requestDetails.url = body.dataToFetch;
        this.activeRequestsCount$.next(this.requestDetails)
      }
    })).toPromise();
  }

  doPostRequest(url: string, postBody: any): Promise<Object> {
    return this.http.post(`${location.origin}/api/${url}`, postBody).toPromise();
  }
}
