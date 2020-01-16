import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/Services/http.service';
import { Subject } from 'rxjs';
import { LocaleService } from 'src/app/Services/locale.service';
import { UrlSubscription } from '../Interfaces/UrlSubscription';

interface pageTemplateTranslationsInterface {
  header: Lang;
  components: ComponentsData;
  footer: Lang;
}

interface ComponentsData {
  about_me: Lang;
  skills: Lang;
  work_experience: Lang;
  education: Lang;
  references: Lang;
  leave_message: Lang;
}

interface Lang {
  ro_RO: null;
  en_US: null;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private pTemplateTranslations: pageTemplateTranslationsInterface = {
    header: { ro_RO: null, en_US: null },
    components: {
      about_me: { ro_RO: null, en_US: null },
      skills: { ro_RO: null, en_US: null },
      work_experience: { ro_RO: null, en_US: null },
      education: { ro_RO: null, en_US: null },
      references: { ro_RO: null, en_US: null },
      leave_message: { ro_RO: null, en_US: null }
    },
    footer: { ro_RO: null, en_US: null }
  };

  private pageTemplateTranslations$ = new Subject<any>();
  private isInitialLoad = {
    ro_RO: true,
    en_US: true
  };

  private currentLocale!: string;

  constructor
    (
      private httpService: HttpService,
      private localeService: LocaleService
    ) {
    this.localeService.getCurrentLocale().subscribe(localeValue => this.currentLocale = localeValue['locale']);
  }

  setCurrentRouteData(urlSubscription: UrlSubscription) {
    const templateKeys:string[] = Object.keys(this.pTemplateTranslations.components);
    const dataToFetch = urlSubscription.dataToFetch;
    const componentIndex = templateKeys.indexOf(dataToFetch);
    const currentLoadStatusIsInitial = this.isInitialLoad[this.currentLocale as 'ro_RO' | 'en_US'];

    if (
      this.pTemplateTranslations.components[templateKeys[componentIndex - 1 === -1 ? 0 : componentIndex - 1] as keyof ComponentsData][this.currentLocale as keyof Lang] !== null &&
      this.pTemplateTranslations.components[templateKeys[componentIndex] as keyof ComponentsData][this.currentLocale as keyof Lang] !== null &&
      this.pTemplateTranslations.components[templateKeys[componentIndex + 1 === templateKeys.length ? componentIndex : componentIndex + 1] as keyof ComponentsData][this.currentLocale as keyof Lang] !== null
    ) return;

    this.httpService.doGetRequest("/", {
      locale: this.currentLocale,
      dataToFetch: dataToFetch,
      isInitialLoad: this.isInitialLoad[this.currentLocale as 'ro_RO' | 'en_US']
    })
      .then(feData => {
        if (currentLoadStatusIsInitial) {
          this.pTemplateTranslations.header[this.currentLocale as keyof Lang] = feData[this.currentLocale].headerData;
          this.pTemplateTranslations.footer[this.currentLocale as keyof Lang] = feData[this.currentLocale].footerData;
          this.isInitialLoad[this.currentLocale as 'ro_RO' | 'en_US'] = false;
        }

        for (const componentKey in feData[this.currentLocale].componentsData) {
          if (this.pTemplateTranslations.components[componentKey as keyof ComponentsData][this.currentLocale as keyof Lang] === null) {
            this.pTemplateTranslations.components[componentKey as keyof ComponentsData][this.currentLocale as keyof Lang] = feData[this.currentLocale].componentsData[componentKey];
          }
        }
        this.pageTemplateTranslations$.next(this.pTemplateTranslations);
      })
      .catch(e => {
        console.log(e)
      });
  }

  getPageTemplate(): Subject<any> {
    return this.pageTemplateTranslations$;
  }
}