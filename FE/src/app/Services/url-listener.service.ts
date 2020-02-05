import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { UrlSubscription } from '../Interfaces/UrlSubscription';
import { DataService } from './data.service';
import { LazyService } from './lazy.service';
import { ContainerRefs, ComponentsData } from '../Interfaces/ComponentsMetadata';

@Injectable({
  providedIn: 'root'
})

export class UrlListenerService {
  public urlSubscriptionBehaviorSubject$ = new Subject<UrlSubscription>();

  constructor(
    private router: Router,
    private dataService: DataService,
    private lazyService: LazyService
  ) { }

  syncLazyLoadWithUrlListening(containerRefs: ContainerRefs) {
    this.lazyService.setContainerRefs(containerRefs);
  }

  start() {
    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd)).subscribe(event => {
      const localUrlSubscription: UrlSubscription = {
        dataToFetch: (event.url !== "/" ? event.url.replace("/portfolio/", '').replace('-', '_') : 'about_me') as keyof ComponentsData,
        path: event.url !== "/" ? event.url.replace("/portfolio/", "") : 'about-me'
      }
      this.urlSubscriptionBehaviorSubject$.next(localUrlSubscription);
      this.dataService.setRouteMetadata(localUrlSubscription.dataToFetch);
    });
  }
}