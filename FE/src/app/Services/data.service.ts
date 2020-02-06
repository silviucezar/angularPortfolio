import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/Services/http.service';
import { LangTemplate, ComponentsTemplate } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor
    (
      private httpService: HttpService
    ) {
  }

  fetchRouteMetadata<K extends keyof ComponentsTemplate>(dataToFetch: K, locale: keyof LangTemplate): Promise<ComponentsTemplate[K]> {
    return this.httpService.doGetRequest<ComponentsTemplate[K]>("getMetadata", {
      locale: locale,
      dataToFetch: dataToFetch
    });
  }
}