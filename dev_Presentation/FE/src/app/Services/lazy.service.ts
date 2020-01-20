import { Injectable, ComponentFactoryResolver, Compiler, ViewContainerRef, ElementRef, TemplateRef } from '@angular/core';
import { UrlSubscription } from '../Interfaces/UrlSubscription';
import { ComponentsMetadata, ContainerRefs, ComponentsData } from '../Interfaces/ComponentsMetadata';

interface ComponentsTemplate {
  about_me: TemplateDetails;
  skills: TemplateDetails;
  jobs: TemplateDetails;
  education: TemplateDetails;
  references: TemplateDetails;
  leave_message: TemplateDetails;
}

interface TemplateDetails {
  key: string;
  containerRef: ViewContainerRef | undefined;
  isLoaded: Boolean;
  module: string;
}

@Injectable({
  providedIn: 'root'
})

export class LazyService {

  private componentsTemplate: ComponentsTemplate = {
    about_me: { key: 'about-me', module: 'AboutMe', containerRef: undefined, isLoaded: false },
    skills: { key: 'skills', module: 'Skills', containerRef: undefined, isLoaded: false },
    jobs: { key: 'jobs', module: 'Jobs', containerRef: undefined, isLoaded: false },
    education: { key: 'education', module: 'Education', containerRef: undefined, isLoaded: false },
    references: { key: 'references', module: 'References', containerRef: undefined, isLoaded: false },
    leave_message: { key: 'leave-message', module: 'LeaveMessage', containerRef: undefined, isLoaded: false }
  }


  constructor(
    private r: ComponentFactoryResolver,
    private c: Compiler
  ) { }

  load(currentUrl: string): Promise<any> {
    return new Promise((resolve) => {
      const currentComponentsToLoad = this.componentsToLoad(currentUrl);
      const loadedComponents = [];
      for (const componentName of currentComponentsToLoad) {
        const componentKey = this.componentsTemplate[componentName as keyof ComponentsData].key;
        const componentModule = `${this.componentsTemplate[componentName as keyof ComponentsData].module}Module`;
        loadedComponents.push(
          import(`../Components/Content/${componentKey}/${componentKey}.module`).then(m => {
            const factory = this.r.resolveComponentFactory(this.c.compileModuleAndAllComponentsSync(m[componentModule]).componentFactories[0].componentType);
            (this.componentsTemplate[componentName as keyof ComponentsData].containerRef as any).createComponent(factory);
            this.componentsTemplate[componentName as keyof ComponentsData].isLoaded = true;
          })
        );
      }
      Promise.all(loadedComponents).then(() => resolve());
    })
  }

  componentsToLoad(middleComponent: string): string[] {
    const componentsTemplateKeys = Object.keys(this.componentsTemplate);
    return componentsTemplateKeys.filter((componentName, index) => {
      if (
        (componentName === middleComponent ||
          componentsTemplateKeys.indexOf(middleComponent) === index - 1 ||
          componentsTemplateKeys.indexOf(middleComponent) === index + 1) &&
        this.componentsTemplate[componentName as keyof ComponentsData].isLoaded === false
      ) return componentName;
    });
  }

  setContainerRefs(containerRefs: ContainerRefs) {
    for (const containerRef in containerRefs) {
      this.componentsTemplate[containerRef as keyof ComponentsTemplate].containerRef = containerRefs[containerRef as keyof ComponentsTemplate]
    }
  }
}
