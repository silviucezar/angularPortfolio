import { Injectable, ComponentFactoryResolver, Compiler, ViewContainerRef } from '@angular/core';
import { ContainerRefs } from '../Interfaces/interfaces';

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
    about_me: { path: 'about-me', module: 'AboutMeModule', containerRef: undefined, isLoaded: false },
    skills: { path: 'skills', module: 'SkillsModule', containerRef: undefined, isLoaded: false },
    jobs: { path: 'jobs', module: 'JobsModule', containerRef: undefined, isLoaded: false },
    education: { path: 'education', module: 'EducationModule', containerRef: undefined, isLoaded: false },
    references: { path: 'references', module: 'ReferencesModule', containerRef: undefined, isLoaded: false },
    leave_message: { path: 'leave-message', module: 'LeaveMessageModule', containerRef: undefined, isLoaded: false }
  }


  constructor(
    private c: Compiler
  ) { }

  load(currentUrl?: string): Promise<any> {
    return new Promise((resolve) => {
      const currentComponentsToLoad = this.componentsToLoad(currentUrl || 'about_me');
      const loadedComponents = [];
      for (const componentName of currentComponentsToLoad) {
        if (this.componentsTemplate[componentName as keyof ComponentsTemplate].isLoaded !== true) {
          console.log('here')
          const path: string = this.componentsTemplate[componentName as keyof ComponentsTemplate].path;
          const key: keyof ComponentsTemplate = componentName as keyof ComponentsTemplate;
          const module = this.componentsTemplate[key].module;
          loadedComponents.push(
            import(`../Components/Content/${path}/${path}.module`).then((m) => {
              const moduleInstance = this.c.compileModuleAndAllComponentsSync(m[module]).componentFactories[path.match(/skills|jobs/) ? 1 : 0];
              (this.componentsTemplate[key].containerRef as ViewContainerRef).createComponent(moduleInstance);
              this.componentsTemplate[key].isLoaded = true;
            })
          );
        };
      }
      Promise.all(loadedComponents).then(() => resolve());
    });
  }

  componentsToLoad(middleComponent: string): any[] {
    let metadataToReturn: string[] = [];
    switch (middleComponent) {
      case 'about_me':
      case 'education':
      case 'references':
        metadataToReturn = ['about_me', 'education', 'references'];
        break;
      case 'skills':
        metadataToReturn = ['skills'];
        break;
      case 'jobs':
        metadataToReturn = ['jobs'];
        break;
      case 'leave_message':
        metadataToReturn = ['references', 'leave_message'];
        break;
    }
    return metadataToReturn;
  }

  setContainerRefs(containerRefs: ContainerRefs) {
    for (const containerRef in containerRefs) {
      this.componentsTemplate[containerRef as keyof ComponentsTemplate].containerRef = containerRefs[containerRef as keyof ComponentsTemplate];
    }
  }
}
