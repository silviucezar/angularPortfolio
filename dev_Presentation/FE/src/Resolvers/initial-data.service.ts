import { Injectable, ElementRef, ComponentFactoryResolver, ViewContainerRef, TemplateRef } from '@angular/core';
import { Resolve, NavigationStart, ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { HttpService } from 'src/Services/http.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { ComponentLoaderInterface } from "../Interfaces/ComponentLoaderInterface"
import { PageTemplate } from 'src/Classes/pageTemplate';
import { filter } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class InitialDataService implements Resolve<any> {

  private ComponentLoader$ = new BehaviorSubject<any>(new PageTemplate());
  private BaseComponentRef$ = new BehaviorSubject<any>("");
  private DataUrl: string = "";
  constructor
    (
      private http: HttpService,
      private router: Router,
      private componentFactoryResolver: ComponentFactoryResolver,
  ) { }


  resolve(): Observable<any> | any {

    return this.http.doGetRequest("/", {
      locale: "ro_RO",
      headerPrefix: "intro_",
      dataPrefix: this.DataUrl
    })
      .then(result => {
        // const COMPONENT_LOADER_DATA = this.ComponentLoader$.value;
        // if (Object.entries(COMPONENT_LOADER_DATA.Template.Header._Data).length === 0 && COMPONENT_LOADER_DATA.Template.Header.constructor === Object) {
        //   COMPONENT_LOADER_DATA.Template.Header._Data = result.ro_ro;
        // }
        // COMPONENT_LOADER_DATA.Template.Components[this.DataUrl]._Data = result.componentData;

        return "success";
      })
      .catch(e => {
        console.log(e)
      })
  }

  getComponentData() { return this.ComponentLoader$; }

  setBaseComponentRef(BaseComponentRef: ElementRef, ViewContainerRef: ViewContainerRef) {
    const COMPONENT_LOADER_DATA = this.ComponentLoader$.value;
    const NATIVE_EL_ELEMENT_BASE_COMPONENT = BaseComponentRef.nativeElement;
    if (COMPONENT_LOADER_DATA.Template.Header._ElementRef === "") {
      COMPONENT_LOADER_DATA.Template.Header._ElementRef = NATIVE_EL_ELEMENT_BASE_COMPONENT.childNodes[0].childNodes[0];
    }
    const COMPONENT_FACTORY = this.componentFactoryResolver.resolveComponentFactory(COMPONENT_LOADER_DATA.Template.Components[this.DataUrl]._Component);
    COMPONENT_LOADER_DATA.Template.Components[this.DataUrl]._ViewContainerRef = ViewContainerRef.createComponent(COMPONENT_FACTORY);
    COMPONENT_LOADER_DATA.Template.Components[this.DataUrl]._ElementRef = NATIVE_EL_ELEMENT_BASE_COMPONENT.childNodes[1];
    console.log(COMPONENT_LOADER_DATA)
    // ViewContainerRef.createComponent(COMPONENT_FACTORY);
  }

  setNavigationURL(url) {
    this.DataUrl = url;
  }
}