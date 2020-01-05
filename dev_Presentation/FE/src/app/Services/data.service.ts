import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/Services/http.service';
import { Subject } from 'rxjs';
import { LocaleService } from 'src/app/Services/locale.service';
interface pageTemplateInterface {
  Header: Lang;
  Components: ComponentsData;
  Footer: Lang;
}

interface Lang {
  ro_RO: null;
  en_US: null;
}

interface ComponentsData {
  AboutMe: Lang;
  Skills: Lang;
  WorkExperience: Lang;
  Education: Lang;
  References: Lang;
  LeaveMessage: Lang;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private pTemplate: pageTemplateInterface = {
    Header: { ro_RO: null, en_US: null },
    Components: {
      AboutMe: { ro_RO: null, en_US: null },
      Skills: { ro_RO: null, en_US: null },
      WorkExperience: { ro_RO: null, en_US: null },
      Education: { ro_RO: null, en_US: null },
      References: { ro_RO: null, en_US: null },
      LeaveMessage: { ro_RO: null, en_US: null }
    },
    Footer: { ro_RO: null, en_US: null }
  };

  private pageTemplateTranslations$ = new Subject<any>();
  private templateKeys = Object.keys(this.pTemplate.Components);
  private isInitialLoad = {
    ro_RO: true,
    en_US: true
  };
  private currentLocale: string = null;

  constructor
    (
      private http: HttpService,
      private locale: LocaleService
    ) {
    this.locale.getCurrentLocale().subscribe(localeValue => this.currentLocale = localeValue['locale']);
  }

  setCurrentRouteData(currentComponent: string) {
    const COMPONENT_INDEX = this.templateKeys.indexOf(currentComponent);
    if (
      this.pTemplate.Components[this.templateKeys[COMPONENT_INDEX - 1 === -1 ? 0 : COMPONENT_INDEX - 1]][this.currentLocale] !== null &&
      this.pTemplate.Components[this.templateKeys[COMPONENT_INDEX]][this.currentLocale] !== null &&
      this.pTemplate.Components[this.templateKeys[COMPONENT_INDEX + 1 === this.templateKeys.length ? COMPONENT_INDEX : COMPONENT_INDEX + 1]][this.currentLocale] !== null
    ) return;

    this.http.doGetRequest("/", {
      locale: this.currentLocale,
      dataToFetch: currentComponent,
      isInitialLoad: this.isInitialLoad[this.currentLocale]
    })
      .then(FE_DATA => {
        if (this.isInitialLoad[this.currentLocale]) {
          this.pTemplate.Header[this.currentLocale] = FE_DATA[this.currentLocale].headerData;
          this.pTemplate.Footer[this.currentLocale] = FE_DATA[this.currentLocale].footerData;
          this.isInitialLoad[this.currentLocale] = false;
        }

        for (const COMPONENT_KEY in FE_DATA[this.currentLocale].componentsData) {
          if (this.pTemplate.Components[COMPONENT_KEY][this.currentLocale] === null) {
            this.pTemplate.Components[COMPONENT_KEY][this.currentLocale] = FE_DATA[this.currentLocale].componentsData[COMPONENT_KEY];
          }
        }
        this.pageTemplateTranslations$.next(this.pTemplate);
      })
      .catch(e => {
        console.log(e)
      });
  }

  getPageTemplate(): Subject<any> {
    return this.pageTemplateTranslations$;
  }
}