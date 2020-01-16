import { Injectable, ComponentFactoryResolver, Compiler } from '@angular/core';
import { UrlSubscriptionFormat } from '../Interfaces/UrlSubscription';

@Injectable({
  providedIn: 'root'
})

export class LoadersService {

  private COMPONENTS_TEMPLATE = {
    AboutMe: { key: 'about-me', containerRef: null, isLoaded: false },
    Skills: { key: 'skills', containerRef: null, isLoaded: false },
    WorkExperience: { key: 'work-experience', containerRef: null, isLoaded: false },
    Education: { key: 'education', containerRef: null, isLoaded: false },
    References: { key: 'references', containerRef: null, isLoaded: false },
    LeaveMessage: { key: 'leave-message', containerRef: null, isLoaded: false }
  }

  private COMPONENTS_NAMES_TEMPLATE = Object.keys(this.COMPONENTS_TEMPLATE);

  constructor(
    private r: ComponentFactoryResolver,
    private c: Compiler
  ) { }

  componentLoad(urlFormat: UrlSubscriptionFormat, metadata: {}) {
    const CURRENT_COMPONENTS_TO_LOAD = this.componentsToLoad(urlFormat.dataToFetch);
    for (const COMPONENT_NAME of CURRENT_COMPONENTS_TO_LOAD) {
      import(`../Components/Content/${this.COMPONENTS_TEMPLATE[COMPONENT_NAME].key}/${this.COMPONENTS_TEMPLATE[COMPONENT_NAME].key}.module`).then(m => {
        const FACTORY_COMPONENT = this.r.resolveComponentFactory(this.c.compileModuleAndAllComponentsSync(m[`${COMPONENT_NAME}Module`]).componentFactories[0].componentType)
        this.COMPONENTS_TEMPLATE[COMPONENT_NAME].containerRef.createComponent(FACTORY_COMPONENT).instance.metadata = metadata[COMPONENT_NAME];
        this.COMPONENTS_TEMPLATE[COMPONENT_NAME].isLoaded = true;
      });
    }
  }

  componentsToLoad(middleComponent: string): string[] {
    return this.COMPONENTS_NAMES_TEMPLATE.filter((componentName, index) => {
      if (
        (componentName === middleComponent ||
          this.COMPONENTS_NAMES_TEMPLATE.indexOf(middleComponent) === index - 1 ||
          this.COMPONENTS_NAMES_TEMPLATE.indexOf(middleComponent) === index + 1) &&
        this.COMPONENTS_TEMPLATE[componentName].isLoaded === false
      ) return componentName;
    });
  }

  setComponentContainerRef(containerRefs: {}) {
    for (const CONTAINER_REF_NAME in containerRefs) { this.COMPONENTS_TEMPLATE[CONTAINER_REF_NAME].containerRef = containerRefs[CONTAINER_REF_NAME]; }
  }
}
