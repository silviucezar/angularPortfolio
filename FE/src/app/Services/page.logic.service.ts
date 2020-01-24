import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageLogic {

  constructor() { }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
