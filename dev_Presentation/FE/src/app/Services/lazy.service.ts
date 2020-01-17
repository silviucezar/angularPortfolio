import { Injectable, ComponentFactoryResolver, Compiler } from '@angular/core';
import { UrlSubscription } from '../Interfaces/UrlSubscription';

@Injectable({
  providedIn: 'root'
})

export class LoadersService {

  private componentsTemplate = {
    about_me: { key: 'about-me', containerRef: null, isLoaded: false },
    skills: { key: 'skills', containerRef: null, isLoaded: false },
    jobs: { key: 'jobs', containerRef: null, isLoaded: false },
    education: { key: 'education', containerRef: null, isLoaded: false },
    references: { key: 'references', containerRef: null, isLoaded: false },
    leave_message: { key: 'leave-message', containerRef: null, isLoaded: false }
  }


  constructor(
    private r: ComponentFactoryResolver,
    private c: Compiler
  ) { }

  componentLoad(urlFormat: UrlSubscription, metadata: {}) {
    const CURRENT_COMPONENTS_TO_LOAD = this.componentsToLoad(urlFormat.dataToFetch);
    // for (const componentName of CURRENT_COMPONENTS_TO_LOAD) {
    //   import(`../Components/Content/${this.COMPONENTS_TEMPLATE[componentName].key}/${this.COMPONENTS_TEMPLATE[componentName].key}.module`).then(m => {
    //     const FACTORY_COMPONENT = this.r.resolveComponentFactory(this.c.compileModuleAndAllComponentsSync(m[`${componentName}Module`]).componentFactories[0].componentType)
    //     this.COMPONENTS_TEMPLATE[componentName].containerRef.createComponent(FACTORY_COMPONENT).instance.metadata = metadata[componentName];
    //     this.COMPONENTS_TEMPLATE[componentName].isLoaded = true;
    //   });
    // }
  }

  componentsToLoad(middleComponent: string): string[] {
    const componentsTemplateKeys = Object.keys(this.componentsTemplate);
    return componentsTemplateKeys.filter((componentName, index) => {
      if (
        (componentName === middleComponent ||
          componentsTemplateKeys.indexOf(middleComponent) === index - 1 ||
          componentsTemplateKeys.indexOf(middleComponent) === index + 1) &&
        this.componentsTemplate[componentName as 'about_me'].isLoaded === false
      ) return componentName;
    });
  }

  setComponentContainerRef(containerRefs: {}) {
    // for (const CONTAINER_REF_NAME in containerRefs) { this.COMPONENTS_TEMPLATE[CONTAINER_REF_NAME].containerRef = containerRefs[CONTAINER_REF_NAME]; }
  }
}
