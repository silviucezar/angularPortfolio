import { Injectable, ComponentFactoryResolver, Compiler, ViewContainerRef } from '@angular/core';
import { ContainerRefs, ComponentsData } from '../Interfaces/ComponentsMetadata';

interface ComponentsTemplate {
  about_me: TemplateDetails;
  skills: TemplateDetails;
  jobs: TemplateDetails;
  education: TemplateDetails;
  references: TemplateDetails;
  leave_message: TemplateDetails;
}

interface TemplateDetails {
  path: string;
  containerRef: ViewContainerRef | undefined;
  isLoaded: Boolean;
  module: string;
}

@Injectable({
  providedIn: 'root'
})

export class LazyService {

  private componentsTemplate: ComponentsTemplate = {
    about_me: { path: 'about-me', module: 'AboutMe', containerRef: undefined, isLoaded: false },
    skills: { path: 'skills', module: 'Skills', containerRef: undefined, isLoaded: false },
    jobs: { path: 'jobs', module: 'Jobs', containerRef: undefined, isLoaded: false },
    education: { path: 'education', module: 'Education', containerRef: undefined, isLoaded: false },
    references: { path: 'references', module: 'References', containerRef: undefined, isLoaded: false },
    leave_message: { path: 'leave-message', module: 'LeaveMessage', containerRef: undefined, isLoaded: false }
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
        const path: string = this.componentsTemplate[componentName as keyof ComponentsData].path;
        const key: keyof ComponentsData = componentName as keyof ComponentsData;
        const module = `${this.componentsTemplate[key].module}Module`;
        loadedComponents.push(
          import(`../Components/Content/${path}/${path}.module`).then(m => {
            const factory = this.r.resolveComponentFactory(this.c.compileModuleAndAllComponentsSync(m[module]).componentFactories[0].componentType);
            (this.componentsTemplate[key].containerRef as ViewContainerRef).createComponent(factory);
            this.componentsTemplate[key].isLoaded = true;
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
      this.componentsTemplate[containerRef as keyof ComponentsTemplate].containerRef = containerRefs[containerRef as keyof ComponentsTemplate];
    }
  }
}
