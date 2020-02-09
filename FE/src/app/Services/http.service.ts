import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { PageLogic } from './page.logic.service';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  public activeRequestsCount$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(
    private http: HttpClient
  ) { }

  doGetRequest<T>(url: string, body: any) {
    this.activeRequestsCount$.next(this.activeRequestsCount$.value + 1);
    return this.http.get<T>(`${location.origin}/api/${url}`, {
      params: body
    }).pipe(finalize(() => this.activeRequestsCount$.next(this.activeRequestsCount$.value - 1))).toPromise();
  }
}
