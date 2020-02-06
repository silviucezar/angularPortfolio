import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { UrlSubscription } from '../Interfaces/interfaces';
import { ComponentsTemplate } from '../Interfaces/interfaces';
import { LazyService } from './lazy.service';

@Injectable({
  providedIn: 'root'
})

export class UrlListenerService {
  public urlSubscriptionBehaviorSubject$ = new Subject<UrlSubscription>();
  private currentUrl:string = 'about-me';
  constructor(
    private router: Router,
    private lazyService:LazyService
  ) { }

  start() {
    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd)).subscribe(event => {
      const localUrlSubscription: UrlSubscription = {
        dataToFetch: (event.url !== "/" ? event.url.replace("/portfolio/", '').replace('-', '_') : 'about_me') as keyof ComponentsTemplate,
        path: event.url !== "/" ? event.url.replace("/portfolio/", "") : 'about-me'
      }
      this.currentUrl = localUrlSubscription.path;
      this.urlSubscriptionBehaviorSubject$.next(localUrlSubscription);
      this.lazyService.load(localUrlSubscription.dataToFetch);
    });
  }

  getCurrentUrl() :string {
    return this.currentUrl;
  }
}