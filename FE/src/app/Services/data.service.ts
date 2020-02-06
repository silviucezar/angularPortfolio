import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/Services/http.service';
import { LocaleService } from 'src/app/Services/locale.service';
import { LangTemplate, Locale, ComponentsTemplate } from '../Interfaces/interfaces';
import { CompileTemplateMetadata } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor
    (
      private httpService: HttpService
    ) {
  }

  fetchRouteMetadata<K extends keyof ComponentsTemplate>(dataToFetch: K,locale:keyof LangTemplate): Promise<ComponentsTemplate[K]> {
      return this.httpService.doGetRequest<ComponentsTemplate[K]>("getMetadata", {
        locale: locale,
        dataToFetch: dataToFetch
      });
  }
}