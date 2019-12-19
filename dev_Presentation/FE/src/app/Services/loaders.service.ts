import { Injectable, Component } from '@angular/core';
import { AboutMeComponent } from '../Components/Content/about-me/about-me.component';
import { SkillsComponent } from '../Components/Content/skills/skills.component';
import { WorkExperienceComponent } from '../Components/Content/work-experience/work-experience.component';
import { EducationComponent } from '../Components/Content/education/education.component';
import { ReferencesComponent } from '../Components/Content/references/references.component';
import { LeaveMessageComponent } from '../Components/Content/leave-message/leave-message.component';
import { HeaderComponent } from '../Components/Header/header.component';
import { FooterComponent } from '../Components/Footer/footer.component';

@Injectable({
  providedIn: 'root'
})
export class LoadersService {
  constructor() { }

  lazyComponentLoad(componentToLoad: {}, url: string, header: any) {
    console.log(header)
    console.log(componentToLoad, url);
  }
}
