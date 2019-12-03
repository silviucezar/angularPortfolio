import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpService } from 'src/Services/http.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { ComponentLoaderInterface } from "../Interfaces/ComponentLoaderInterface"
import { AboutMeComponent } from 'src/Components/_Content/about-me/about-me.component';

@Injectable({
  providedIn: 'root'
})
export class InitialDataService implements Resolve<any> {

  private ComponentLoaderData: ComponentLoaderInterface = {
    HeaderData: {},
    ComponentsToLoad: {
      AboutMe: {
        data: "",
        component: AboutMeComponent
      },
      WorkExperience: {
        data: "",
        component: ""
      }
    }
  };
  private ComponentLoader$ = new Observable();
  private ComponentLoaderBehaviorSubject = new BehaviorSubject<ComponentLoaderInterface>(this.ComponentLoaderData);

  constructor
    (
      private http: HttpService
    ) {
    this.ComponentLoader$ = this.ComponentLoaderBehaviorSubject.asObservable();
  }
  resolve(): Observable<any> | any {
    return this.http.doGetRequest("/", {
      locale: "ro_ro",
      prefix: "intro_"
    })
      .then(result => {
        if (Object.entries(this.ComponentLoaderData.HeaderData).length === 0 && this.ComponentLoaderData.HeaderData.constructor === Object) {
          this.ComponentLoaderData.HeaderData = result.ro_ro;
        }
        this.ComponentLoaderData.ComponentsToLoad["AboutMe"].data = result.componentData;
        this.ComponentLoaderData.ComponentsToLoad["AboutMe"].data = result.componentData;
        console.log(this.ComponentLoaderData.ComponentsToLoad)
        this.ComponentLoaderBehaviorSubject.next(this.ComponentLoaderData);
        return result;
      })
      .catch(e => {
        console.log(e)
      })
  }

  getComponentData() {
    return this.ComponentLoader$;
  }
}