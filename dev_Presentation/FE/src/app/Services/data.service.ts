import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { HttpService } from 'src/app/Services/http.service';
import { PageTemplate } from 'src/app/Classes/pageTemplate';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private pageTemplate = new PageTemplate();

  constructor
    (
      private http: HttpService,
      private componentFactoryResolver: ComponentFactoryResolver
    ) { }

  getRoutesData(componentData: object) {
    return new Promise((resolve, reject) => {
      if (!this.pageTemplate.Header.component.hasOwnProperty("viewContainerRef")) {
        this.pageTemplate.Header.component = componentData;
        this.pageTemplate.Header.viewContainerRef = componentData["viewContainerRef"];
      }
      this.http.doGetRequest("/", {
        locale: "ro_RO",
        headerPrefix: "intro_",
        dataPrefix: componentData["url"],
        loadHeader: componentData["loadingHeader"]
      })
        .then(result => {
          console.log(this.pageTemplate)
          if (componentData["loadingHeader"] === true) {
            this.pageTemplate.Header.data = result;
          } else {
            const TEMPLATE_COMPONENT_KEYS = Object.keys(this.pageTemplate.Components);
            console.log(TEMPLATE_COMPONENT_KEYS)
          }
          this.lazyAppendComponent(this.pageTemplate.Components[componentData["url"]],resolve);
          resolve(this.pageTemplate);
        })
        .catch(e => {
          reject(e);
        })
    })
  }

  

  lazyAppendComponent(neighbouringComponent:any,resolve) {
    const COMPONENT_TO_LOAD = this.componentFactoryResolver.resolveComponentFactory(neighbouringComponent.component);
    neighbouringComponent.viewContainerRef = this.pageTemplate.Header.viewContainerRef.createComponent(COMPONENT_TO_LOAD);
  }
}