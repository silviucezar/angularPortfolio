import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { UrlSubscription } from '../Interfaces/UrlSubscription';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})

export class UrlListenerService {
  public urlSubscriptionBehaviorSubject$ = new BehaviorSubject<UrlSubscription>({
    dataToFetch: 'about_me',
    path: 'about-me'
  });

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  listen() {
    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd)).subscribe(event => {
      this.urlSubscriptionBehaviorSubject$.next({
        dataToFetch: event.url !== "/" ? event.url.replace("/portfolio/", '').replace('-', '_') : event.url.replace('-', '_'),
        path: event["url"].replace("/portfolio/", "")
      });
      this.dataService.setCurrentRouteDataUsingUrl(this.urlSubscriptionBehaviorSubject$.value.dataToFetch);
    });
  }
}