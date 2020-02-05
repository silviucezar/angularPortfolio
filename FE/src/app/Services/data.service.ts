import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/Services/http.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { LocaleService } from 'src/app/Services/locale.service';
import { ComponentsMetadata, ComponentsData, Lang } from '../Interfaces/ComponentsMetadata';
import { Locale } from '../Interfaces/Locale';
import { LazyService } from './lazy.service';
import { ComponentsDataStructure, ComponentsTemplate } from '../Interfaces/FrontEndData';

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
    dataToFetch: 'about_me',
    locale: 'en_US'
  };

  private componentsMetadata$ = new Subject<ComponentsMetadata>();
  private isInitialLoad = {
    ro_RO: true,
    en_US: true
  };

  constructor
    (
      private httpService: HttpService,
      private localeService: LocaleService,
      private lazyService: LazyService
    ) {
    this.localeService.getCurrentLocale().subscribe((localeValue: Locale) => this.componentsMetadata.locale = localeValue.locale);
  }

  isMetadataAvailable(metadata?: keyof ComponentsData): boolean {
    const metadataLoadStatus: boolean[] = [];
    const locale = this.componentsMetadata.locale;
    switch (metadata || this.componentsMetadata.dataToFetch) {
      case 'about_me':
      case 'education':
      case 'references':
        metadataLoadStatus.push(this.componentsMetadata.components.about_me[locale] !== undefined);
        metadataLoadStatus.push(this.componentsMetadata.components.education[locale] !== undefined);
        metadataLoadStatus.push(this.componentsMetadata.components.references[locale] !== undefined);
        break;
      case 'skills':
        metadataLoadStatus.push(this.componentsMetadata.components.skills[locale] !== undefined);
        break;
      case 'jobs':
        metadataLoadStatus.push(this.componentsMetadata.components.jobs[locale] !== undefined);
        break;
      case 'leave_message':
        metadataLoadStatus.push(this.componentsMetadata.components.references[locale] !== undefined);
        metadataLoadStatus.push(this.componentsMetadata.components.leave_message[locale] !== undefined);
        break;
    }
    return metadataLoadStatus.indexOf(false) === -1;
  }


  setRouteMetadata(dataToFetch?: keyof ComponentsData) {
    const data = dataToFetch || this.componentsMetadata.dataToFetch;
    const locale = this.componentsMetadata.locale;
    if (this.isMetadataAvailable(dataToFetch)) return;

    this.httpService.doGetRequest("getMetadata", {
      locale: locale,
      dataToFetch: data,
      isInitialLoad: this.isInitialLoad[locale]
    })
      .then((feData: ComponentsDataStructure) => {
        this.componentsMetadata.dataToFetch = dataToFetch || this.componentsMetadata.dataToFetch;
        const currentMetadata: ComponentsDataStructure = feData;
        if (this.isInitialLoad[locale]) {
          this.componentsMetadata.header[locale] = currentMetadata.headerData;
          this.componentsMetadata.footer[locale] = currentMetadata.footerData;
          this.isInitialLoad[locale] = false;
        }
        for (const componentKey in currentMetadata.componentsData) {
          const key = componentKey as keyof ComponentsData;
          if (this.componentsMetadata.components[key][locale] === undefined) {
            (this.componentsMetadata.components[key][locale] as ComponentsTemplate) = currentMetadata.componentsData[key] as unknown as ComponentsTemplate;
          }
        }
        this.lazyService.load(data).then(() => this.componentsMetadata$.next(this.componentsMetadata));
      })
      .catch(e => {
        console.log(e)
      });
  }

  getRoutesMetadata(): Subject<ComponentsMetadata> {
    return this.componentsMetadata$;
  }
}