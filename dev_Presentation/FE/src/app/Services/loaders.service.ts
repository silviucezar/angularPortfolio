import { Injectable, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { AboutMeComponent } from '../Components/Content/about-me/about-me.component';
import { SkillsComponent } from '../Components/Content/skills/skills.component';
import { WorkExperienceComponent } from '../Components/Content/work-experience/work-experience.component';
import { EducationComponent } from '../Components/Content/education/education.component';
import { ReferencesComponent } from '../Components/Content/references/references.component';
import { LeaveMessageComponent } from '../Components/Content/leave-message/leave-message.component';

@Injectable({
  providedIn: 'root'
})

export class LoadersService {

  private COMPONENTS_TEMPLATE = {
    AboutMe: { component: AboutMeComponent, containerRef: null, isLoaded: false },
    Skills: { component: SkillsComponent, containerRef: null, isLoaded: false },
    WorkExperience: { component: WorkExperienceComponent, containerRef: null, isLoaded: false },
    Education: { component: EducationComponent, containerRef: null, isLoaded: false },
    References: { component: ReferencesComponent, containerRef: null, isLoaded: false },
    LeaveMessage: { component: LeaveMessageComponent, containerRef: null, isLoaded: false }
  }

  private COMPONENTS_NAMES_TEMPLATE = Object.keys(this.COMPONENTS_TEMPLATE);

  constructor(private r: ComponentFactoryResolver) { }

  componentLoad(componentName: string) {
    const CURRENT_COMPONENTS_TO_LOAD = this.componentsToLoad(componentName);
    for (const COMPONENT_NAME of CURRENT_COMPONENTS_TO_LOAD) {
      const FACTORY_COMPONENT = this.r.resolveComponentFactory(this.COMPONENTS_TEMPLATE[COMPONENT_NAME].component)
      this.COMPONENTS_TEMPLATE[COMPONENT_NAME].containerRef.createComponent(FACTORY_COMPONENT);
      this.COMPONENTS_TEMPLATE[COMPONENT_NAME].isLoaded = true;
    }
  }

  componentsToLoad(middleComponent: string): string[] {
    return this.COMPONENTS_NAMES_TEMPLATE.filter((componentName, index) => {
      if (
        (componentName === middleComponent ||
          this.COMPONENTS_NAMES_TEMPLATE.indexOf(middleComponent) === index - 1 ||
          this.COMPONENTS_NAMES_TEMPLATE.indexOf(middleComponent) === index + 1) &&
        this.COMPONENTS_TEMPLATE[componentName].isLoaded === false
      ) return componentName
    });
  }

  setComponentContainerRef(containerRefs: {}) {
    for (const CONTAINER_REF_NAME in containerRefs) { this.COMPONENTS_TEMPLATE[CONTAINER_REF_NAME].containerRef = containerRefs[CONTAINER_REF_NAME]; }
  }
}
