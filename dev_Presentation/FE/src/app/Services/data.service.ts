import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { HttpService } from 'src/app/Services/http.service';
import { PageTemplate } from 'src/app/Classes/pageTemplate';
import { LoadersService } from './loaders.service';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private pageTemplate$ = new BehaviorSubject(new PageTemplate());
  private currPageTemplate = this.pageTemplate$.value;
  private currPageTemplateKeys = Object.keys(this.currPageTemplate.Components);
  private isInitialLoad = {
    ro_RO: true,
    en_US: true
  };
  private dataToFetch: string | string[] = null;
  private locale: string = 'ro_RO';
  constructor
    (
      private http: HttpService,
      private componentFactoryResolver: ComponentFactoryResolver,
      private load: LoadersService
    ) { }

  getRoutesData(dataToFetch: string[], currentComponent: string) {
    console.clear();
    const CURRENT_COMPONENT_INDEX = this.currPageTemplateKeys.indexOf(currentComponent)
    this.currPageTemplateKeys.filter((componentKey, componentIndex) => {
      if (
        componentIndex === CURRENT_COMPONENT_INDEX - 1 ||
        componentIndex === CURRENT_COMPONENT_INDEX ||
        componentIndex === CURRENT_COMPONENT_INDEX + 1
      ) return componentKey;
    }).forEach(filteredComponentKey => {
      if (this.currPageTemplate.Components[filteredComponentKey].data[this.locale]) return;
    })
    this.dataToFetch = dataToFetch[0] !== 'InitialData' ? dataToFetch[0] : dataToFetch;

    return new Promise((resolve, reject) => {
      this.http.doGetRequest("/", {
        locale: this.locale,
        dataToFetch: this.dataToFetch
      })
        .then(FE_DATA => {
          if (this.isInitialLoad[this.locale]) {
            this.currPageTemplate.Header.data[this.locale] = FE_DATA[this.locale].headerData;
            this.currPageTemplate.Footer.data[this.locale] = FE_DATA[this.locale].footerData;
            this.isInitialLoad[this.locale] = false;
          }

          for (const COMPONENT_DATA_KEY in FE_DATA[this.locale].componentsData) {
            this.currPageTemplate.Components[COMPONENT_DATA_KEY].data[this.locale] = FE_DATA[this.locale].componentsData[COMPONENT_DATA_KEY];
          }
          // this.currPageTemplate[this.componentToBindData].data[this.locale] = result.componentsData
          // this.pageTemplate$.next(this.currPageTemplate);
          console.log(this.currPageTemplate)
          // if (componentData["loadingHeader"] === true) {
          //   this.pageTemplate.Header.data = result;
          // } else {

          // }
          // this.lazyAppendComponent(this.pageTemplate.Components[componentData["url"]], resolve);
          // resolve(this.pageTemplate);
        })
        .catch(e => {
          reject(e);
        });
    })
  }

  // lazyAppendComponent(neighbouringComponent: any, resolve) {
  //   const COMPONENT_TO_LOAD = this.componentFactoryResolver.resolveComponentFactory(neighbouringComponent.component);
  //   neighbouringComponent.viewContainerRef = this.pageTemplate.Header.viewContainerRef.createComponent(COMPONENT_TO_LOAD);
  // }

  setComponentContainerRef(componentName: string, componentContainerRef: ViewContainerRef, component: object) {
    this.currPageTemplate[componentName].viewContainerRef = componentContainerRef;
    this.currPageTemplate[componentName].component = component;
    this.pageTemplate$.next(this.currPageTemplate)
  }
}