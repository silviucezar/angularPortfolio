import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/Services/http.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { LocaleService } from 'src/app/Services/locale.service';
import { UrlSubscription } from '../Interfaces/UrlSubscription';
import { ComponentsMetadata, ComponentsData, Lang, PageSectionsTranslations } from '../Interfaces/ComponentsMetadata';
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
    dataToFetch: '',
    currentLocale: ''
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
    this.localeService.getCurrentLocale().subscribe((localeValue: Locale) => {
      this.componentsMetadata.currentLocale = localeValue.locale;
    })
  }

  setCurrentRouteDataUsingLang(locale: string) {
    this.componentsMetadata.currentLocale = locale;
    this.setCurrentRouteDataUsingUrl(this.componentsMetadata.dataToFetch);
  }

  setCurrentRouteDataUsingUrl(dataToFetch: string) {
    const locale = this.componentsMetadata.currentLocale as keyof Lang;
    const templateKeys: string[] = Object.keys(this.componentsMetadata.components);
    const componentIndex = templateKeys.indexOf(dataToFetch);
    const currentLoadStatusIsInitial = this.isInitialLoad[locale];
    if (
      this.componentsMetadata.components[templateKeys[componentIndex - 1 === -1 ? 0 : componentIndex - 1] as keyof ComponentsData][locale] !== undefined &&
      this.componentsMetadata.components[templateKeys[componentIndex] as keyof ComponentsData][locale] !== undefined &&
      this.componentsMetadata.components[templateKeys[componentIndex + 1 === templateKeys.length ? componentIndex : componentIndex + 1] as keyof ComponentsData][locale] !== undefined
    ) return this.componentsMetadata$.next(this.componentsMetadata);

    this.httpService.doGetRequest("/", {
      locale: locale,
      dataToFetch: dataToFetch,
      isInitialLoad: this.isInitialLoad[this.currentLocale as 'ro_RO' | 'en_US']
    })
      .then(feData => {
        this.componentsMetadata.dataToFetch = dataToFetch;
        if (currentLoadStatusIsInitial) {
          this.componentsMetadata.header[locale] = feData[locale].headerData;
          this.componentsMetadata.footer[locale] = feData[locale].footerData;
          this.isInitialLoad[locale] = false;
        }
        for (const componentKey in feData[locale].componentsData) {
          if (this.componentsMetadata.components[componentKey as keyof ComponentsData][locale] === undefined) {
            this.componentsMetadata.components[componentKey as keyof ComponentsData][locale] = feData[locale].componentsData[componentKey];
          }
        }
        this.lazyService.load(dataToFetch).then(() => {
          this.componentsMetadata$.next(this.componentsMetadata)
        });
      })
      .catch(e => {
        console.log(e)
      });
  }

  getRoutesMetadata(): Subject<ComponentsMetadata> {
    return this.componentsMetadata$;
  }
}