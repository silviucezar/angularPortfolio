import { Injectable, ElementRef } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpService } from 'src/Services/http.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { ComponentLoaderInterface } from "../Interfaces/ComponentLoaderInterface"
import { PageTemplate } from 'src/Classes/pageTemplate';

@Injectable({
  providedIn: 'root'
})
export class InitialDataService implements Resolve<any> {

  private ComponentLoader$ = new Observable();
  // private ComponentLoaderBehaviorSubject = new BehaviorSubject<ComponentLoaderInterface>(this.ComponentLoaderData);
  private BaseComponentRef$ = new Observable();
  // private BaseComponentRefBehaviorSubject = new BehaviorSubject<ComponentLoaderInterface>(this.ComponentLoaderData);
  componentFactoryResolver: any;

  constructor
    (
      private http: HttpService
    ) {
    // this.ComponentLoader$ = this.ComponentLoaderBehaviorSubject.asObservable();
    // this.BaseComponentRef$ = this.BaseComponentRefBehaviorSubject.asObservable();
  }
  resolve(): Observable<any> | any {
    return this.http.doGetRequest("/", {
      locale: "ro_ro",
      prefix: "intro_"
    })
      .then(result => {
        console.log(new PageTemplate())
        // const ComponentLoaderData: ComponentLoaderInterface = {
        //   Header: {
        //     _Data: "",
        //     _ElementRef: "",
        //     _Component: HeaderComponent
        //   },
        //   Components: {}
        // };
        // if (Object.entries(ComponentLoaderData.Header["_Data"]).length === 0 && ComponentLoaderData.Header.constructor === Object) {
        //   ComponentLoaderData.Header["_Data"] = result.ro_ro;
        // }
        // ComponentLoaderData.Components["AboutMe"] = {
        //   _Data: result.componentData,
        //   _ElementRef: "",
        //   _Component: ""
        // }
        // this.ComponentLoaderBehaviorSubject.next(ComponentLoaderData);
        return result;
      })
      .catch(e => {
        console.log(e)
      })
  }

  getComponentData() { return this.ComponentLoader$; }

  setBaseComponentRef(BaseComponentRef) {
    // const ComponentLoaderData = this.ComponentLoaderBehaviorSubject.value;
    // console.log(ComponentLoaderData)
    // this.BaseComponentRefBehaviorSubject.next(BaseComponentRef);
    // console.log(this.BaseComponentRefBehaviorSubject.value)

    // console.log(this.BaseComponentRefBehaviorSubject.value)
    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AboutMeComponent);
    // const containerRef = this.App_Global_Header;
    // console.log(containerRef)
    // console.log(containerRef)

    // console.log(containerRef)
    // containerRef.clear();
    // containerRef.createComponent(componentFactory);
  }
}