import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { HttpService } from 'src/app/Services/http.service';
import { Subject } from 'rxjs';

interface pageTemplateInterface {
  Header: Lang;
  Components: ComponentsData;
  Footer: Lang;
}

interface Lang {
  ro_RO: null
  en_US: null
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

  private pageTemplate$ = new Subject<any>();
  private templateKeys = Object.keys(this.pTemplate.Components);
  private isInitialLoad = {
    ro_RO: true,
    en_US: true
  };
  private locale: string = 'ro_RO';
  constructor
    (
      private http: HttpService,
      private componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  setCurrentRouteData(currentComponent: string) {
    const COMPONENT_INDEX = this.templateKeys.indexOf(currentComponent);
    if (
      this.pTemplate.Components[this.templateKeys[COMPONENT_INDEX - 1 === -1 ? 0 : COMPONENT_INDEX - 1]][this.locale] !== null &&
      this.pTemplate.Components[this.templateKeys[COMPONENT_INDEX]][this.locale] !== null &&
      this.pTemplate.Components[this.templateKeys[COMPONENT_INDEX + 1 === this.templateKeys.length ? COMPONENT_INDEX : COMPONENT_INDEX + 1]][this.locale] !== null
    ) return;

    this.http.doGetRequest("/", {
      locale: this.locale,
      dataToFetch: currentComponent,
      isInitialLoad: this.isInitialLoad[this.locale]
    })
      .then(FE_DATA => {
        if (this.isInitialLoad[this.locale]) {
          this.pTemplate.Header[this.locale] = FE_DATA[this.locale].headerData;
          this.pTemplate.Footer[this.locale] = FE_DATA[this.locale].footerData;
          this.isInitialLoad[this.locale] = false;
        }

        for (const COMPONENT_KEY in FE_DATA[this.locale].componentsData) {
          if (this.pTemplate.Components[COMPONENT_KEY][this.locale] === null) {
            this.pTemplate.Components[COMPONENT_KEY][this.locale] = FE_DATA[this.locale].componentsData[COMPONENT_KEY];
          }
        }
        this.pageTemplate$.next(this.pTemplate);
        // if (componentData["loadingHeader"] === true) {
        //   this.pageTemplate.Header.data = result;
        // } else {

        // }
        // this.lazyAppendComponent(this.pageTemplate.Components[componentData["url"]], resolve);
        // resolve(this.pageTemplate);
      })
      .catch(e => {
        console.log(e)
      });
  }

  // lazyAppendComponent(neighbouringComponent: any, resolve) {
  //   const COMPONENT_TO_LOAD = this.componentFactoryResolver.resolveComponentFactory(neighbouringComponent.component);
  //   neighbouringComponent.viewContainerRef = this.pageTemplate.Header.viewContainerRef.createComponent(COMPONENT_TO_LOAD);
  // }

  setComponentContainerRef(componentName: string, componentContainerRef: ViewContainerRef, component: object) {
    this.pTemplate[componentName].viewContainerRef = componentContainerRef;
    this.pTemplate[componentName].component = component;
    this.pageTemplate$.next(this.pTemplate)
  }

  getPageTemplate(): Subject<any> {
    return this.pageTemplate$;
  }
}