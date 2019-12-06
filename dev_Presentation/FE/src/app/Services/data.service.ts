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
    return new Promise((res, rej) => {
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
          if (componentData["loadingHeader"] === true) this.pageTemplate.Header.data = result;
          const COMPONENT_FACTORY = this.componentFactoryResolver.resolveComponentFactory(this.pageTemplate.Components[componentData["url"]].component);
          this.pageTemplate.Components[componentData["url"]].viewContainerRef = this.pageTemplate.Header.viewContainerRef.createComponent(COMPONENT_FACTORY);
          res(this.pageTemplate);
        })
        .catch(e => {
          rej(e);
        })
    })
  }
}