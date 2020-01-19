import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/Services/http.service';
import { Subject } from 'rxjs';
import { LocaleService } from 'src/app/Services/locale.service';
import { UrlSubscription } from '../Interfaces/UrlSubscription';
import { ComponentsMetadata, ComponentsData, Lang } from '../Interfaces/ComponentsMetadata';
import { Locale } from '../Interfaces/Locale';
import { LazyService } from './lazy.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private componentsMetadata: ComponentsMetadata = {
    header: { ro_RO: undefined, en_US: undefined },
    components: {
      about_me: { ro_RO: undefined, en_US: undefined },
      skills: { ro_RO: undefined, en_US: undefined },
      jobs: { ro_RO: undefined, en_US: undefined },
      education: { ro_RO: undefined, en_US: undefined },
      references: { ro_RO: undefined, en_US: undefined },
      leave_message: { ro_RO: undefined, en_US: undefined }
    },
    footer: { ro_RO: undefined, en_US: undefined },
    currentUrl: ''
  };

  private componentsMetadata$ = new Subject<ComponentsMetadata>();
  private isInitialLoad = {
    ro_RO: true,
    en_US: true
  };

  private currentLocale!: string;

  constructor
    (
      private httpService: HttpService,
      private localeService: LocaleService,
      private lazyService: LazyService
    ) {
    this.localeService.getCurrentLocale().subscribe((localeValue: Locale) => this.currentLocale = localeValue.locale);
  }

  setCurrentRouteData(urlSubscription: UrlSubscription) {
    const templateKeys: string[] = Object.keys(this.componentsMetadata.components);
    const dataToFetchUrl = urlSubscription.dataToFetch;
    const componentIndex = templateKeys.indexOf(dataToFetchUrl);
    const currentLoadStatusIsInitial = this.isInitialLoad[this.currentLocale as 'ro_RO' | 'en_US'];
    if (
      this.componentsMetadata.components[templateKeys[componentIndex - 1 === -1 ? 0 : componentIndex - 1] as keyof ComponentsData][this.currentLocale as keyof Lang] !== undefined &&
      this.componentsMetadata.components[templateKeys[componentIndex] as keyof ComponentsData][this.currentLocale as keyof Lang] !== undefined &&
      this.componentsMetadata.components[templateKeys[componentIndex + 1 === templateKeys.length ? componentIndex : componentIndex + 1] as keyof ComponentsData][this.currentLocale as keyof Lang] !== undefined
    ) return;

    this.httpService.doGetRequest("/", {
      locale: this.currentLocale,
      dataToFetch: dataToFetchUrl,
      isInitialLoad: this.isInitialLoad[this.currentLocale as 'ro_RO' | 'en_US']
    })
      .then(feData => {
        this.componentsMetadata.currentUrl = dataToFetchUrl;
        if (currentLoadStatusIsInitial) {
          this.componentsMetadata.header[this.currentLocale as keyof Lang] = feData[this.currentLocale].headerData;
          this.componentsMetadata.footer[this.currentLocale as keyof Lang] = feData[this.currentLocale].footerData;
          this.isInitialLoad[this.currentLocale as 'ro_RO' | 'en_US'] = false;
        }
        for (const componentKey in feData[this.currentLocale as keyof Lang].componentsData) {
          if (this.componentsMetadata.components[componentKey as keyof ComponentsData][this.currentLocale as keyof Lang] === undefined) {
            this.componentsMetadata.components[componentKey as keyof ComponentsData][this.currentLocale as keyof Lang] = feData[this.currentLocale].componentsData[componentKey];
          }
        }
        this.lazyService.load(dataToFetchUrl)
          .then(() => {
            console.log(this.componentsMetadata)
            this.componentsMetadata$.next(this.componentsMetadata);
          })
      })
      .catch(e => {
        console.log(e)
      });
  }

  getRoutesData(): Subject<ComponentsMetadata> {
    console.log('asda')
    return this.componentsMetadata$;
  }
}