import { Injectable, Component, NgModule } from '@angular/core';
import { TEMPLATE_COMPONENTS } from '../app.module';
import { HeaderComponent } from '../Components/header/header.component';
import { AboutMeComponent } from '../Components/Content/about-me/about-me.component';
import { SkillsComponent } from '../Components/Content/skills/skills.component';
import { WorkExperienceComponent } from '../Components/Content/work-experience/work-experience.component';
import { EducationComponent } from '../Components/Content/education/education.component';
import { ReferencesComponent } from '../Components/Content/references/references.component';
import { LeaveMessageComponent } from '../Components/Content/leave-message/leave-message.component';
import { FooterComponent } from '../Components/footer/footer.component';

@Injectable({
  providedIn: 'root'
})

export class LoadersService {
  private COMPONENTS_TEMPLATE = {
    HeaderComponent,
    AboutMeComponent,
    SkillsComponent,
    WorkExperienceComponent,
    EducationComponent,
    ReferencesComponent,
    LeaveMessageComponent,
    FooterComponent
  }

  constructor() { }

  lazyComponentLoad(componentToLoad: string, component: string) {
    console.log(this.COMPONENTS_TEMPLATE)
    console.log(this.COMPONENTS_TEMPLATE[`${'Header' + 'Component'}`])
    console.log(this.COMPONENTS_TEMPLATE.AboutMeComponent)
    console.log(this.COMPONENTS_TEMPLATE.SkillsComponent)
    console.log(this.COMPONENTS_TEMPLATE.WorkExperienceComponent)
    console.log(this.COMPONENTS_TEMPLATE.EducationComponent)
    console.log(this.COMPONENTS_TEMPLATE.ReferencesComponent)
    console.log(this.COMPONENTS_TEMPLATE.LeaveMessageComponent)
    console.log(this.COMPONENTS_TEMPLATE.FooterComponent)
    // console.log(templates)
    // console.log(TEMPLATE_COMPONENTS[component]);
  }
}
