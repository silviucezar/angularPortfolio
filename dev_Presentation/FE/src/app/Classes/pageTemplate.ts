import { AboutMeComponent } from '../Components/Content/about-me/about-me.component';
import { SkillsComponent } from '../Components/Content/skills/skills.component';
import { WorkExperienceComponent } from '../Components/Content/work-experience/work-experience.component';
import { EducationComponent } from '../Components/Content/education/education.component';
import { ReferencesComponent } from '../Components/Content/references/references.component';
import { LeaveMessageComponent } from '../Components/Content/leave-message/leave-message.component';

import { ComponentLoaderInterface } from '../Interfaces/ComponentLoaderInterface';

export class PageTemplate implements ComponentLoaderInterface {
    public readonly Header = {
        data: null,
        viewContainerRef: null,
        component: {}
    };
    public readonly Components = {
        AboutMe: {
            data: null,
            viewContainerRef: null,
            component: AboutMeComponent
        },
        Skills: {
            data: null,
            viewContainerRef: null,
            component: SkillsComponent
        },
        WorkExperience: {
            data: null,
            viewContainerRef: null,
            component: WorkExperienceComponent
        },
        Education: {
            data: null,
            viewContainerRef: null,
            component: EducationComponent
        },
        References: {
            data: null,
            viewContainerRef: null,
            component: ReferencesComponent
        },
        LeaveMessage: {
            data: null,
            viewContainerRef: null,
            component: LeaveMessageComponent
        }
    }
}