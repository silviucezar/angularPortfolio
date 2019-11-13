import { Injectable } from '@angular/core';
import { RenderDetails } from "src/Interfaces/renderDetails";
import { Observable, BehaviorSubject } from 'rxjs';

//Interfaces to expose relevant details needed to correctly render an element such device type/os/sizes

@Injectable({
  providedIn: 'root'
})

export class RenderingService {

  renderDetails$: Observable<object>;
  private renderDetailsBehaviorSubject: BehaviorSubject<RenderDetails> = new BehaviorSubject({});

  constructor() {
    this.renderDetails$ = this.renderDetailsBehaviorSubject.asObservable();
    this.renderDetailsBehaviorSubject.next({
      os: navigator.platform,
      browser: navigator.userAgent.match(/firefox|chrome|safari|opera|edge/gi).toString()
    });
  }

  getRenderDetails() {
    return this.renderDetails$;
  }
}
