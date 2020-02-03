import { Injectable, Renderer2 } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PageLogic {

  constructor(
    renderer?: Renderer2
  ) { }

  objectKeys(obj: any): string[] {
    try { return Object.keys(obj) } catch (e) { return [] };
  }
}
