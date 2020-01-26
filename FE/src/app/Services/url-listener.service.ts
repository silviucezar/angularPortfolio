import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { UrlSubscription } from '../Interfaces/UrlSubscription';
import { DataService } from './data.service';
import { LazyService } from './lazy.service';
import { ContainerRefs } from '../Interfaces/ComponentsMetadata';

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
    private dataService: DataService,
    private lazyService: LazyService
  ) { }

  syncLazyLoadWithUrlListening(containerRefs: ContainerRefs) {
    this.lazyService.setContainerRefs(containerRefs);
  }

  listen() {
    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd)).subscribe(event => {
      this.urlSubscriptionBehaviorSubject$.next({
        dataToFetch: event.url !== "/" ? event.url.replace("/portfolio/", '').replace('-', '_') : 'about_me',
        path: event["url"].replace("/portfolio/", "")
      });
      this.dataService.setCurrentRouteDataUsingUrl(this.urlSubscriptionBehaviorSubject$.value.dataToFetch);
    });
  }
}