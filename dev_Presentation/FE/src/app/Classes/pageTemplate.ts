import { AboutMeComponent } from '../Components/_Content/about-me/about-me.component';
import { WorkExperienceComponent } from '../Components/_Content/work-experience/work-experience.component';
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
        WorkExperience: {
            data: null,
            viewContainerRef: null,
            component: WorkExperienceComponent
        },
    }
}