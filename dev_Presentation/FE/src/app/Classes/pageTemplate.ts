import { AboutMeComponent } from '../Components/Content/about-me/about-me.component';
import { SkillsComponent } from '../Components/Content/skills/skills.component';
import { WorkExperienceComponent } from '../Components/Content/work-experience/work-experience.component';
import { EducationComponent } from '../Components/Content/education/education.component';
import { ReferencesComponent } from '../Components/Content/references/references.component';
import { LeaveMessageComponent } from '../Components/Content/leave-message/leave-message.component';
import { ComponentLoaderInterface } from '../Interfaces/ComponentLoaderInterface';
import { HeaderComponent } from '../Components/Header/header.component';
import { FooterComponent } from '../Components/Footer/footer.component';

export class PageTemplate implements ComponentLoaderInterface {
    constructor() {

    }
    public readonly Header = {
        data: {
            ro_RO: null,
            en_US: null
        },
        viewContainerRef: null,
        component: null
    };
    public readonly Components = {
        AboutMe: {
            data: {
                ro_RO: null,
                en_US: null
            },
            viewContainerRef: {
                ro_RO: null,
                en_US: null
            },
            component: AboutMeComponent
        },
        Skills: {
            data: {
                ro_RO: null,
                en_US: null
            },
            viewContainerRef: {
                ro_RO: null,
                en_US: null
            },
            component: SkillsComponent
        },
        WorkExperience: {
            data: {
                ro_RO: null,
                en_US: null
            },
            viewContainerRef: {
                ro_RO: null,
                en_US: null
            },
            component: WorkExperienceComponent
        },
        Education: {
            data: {
                ro_RO: null,
                en_US: null
            },
            viewContainerRef: {
                ro_RO: null,
                en_US: null
            },
            component: EducationComponent
        },
        References: {
            data: {
                ro_RO: null,
                en_US: null
            },
            viewContainerRef: {
                ro_RO: null,
                en_US: null
            },
            component: ReferencesComponent
        },
        LeaveMessage: {
            data: {
                ro_RO: null,
                en_US: null
            },
            viewContainerRef: {
                ro_RO: null,
                en_US: null
            },
            component: LeaveMessageComponent
        }
    }
    public readonly Footer = {
        data: {
            ro_RO: null,
            en_US: null
        },
        viewContainerRef: null,
        component: null
    };
}