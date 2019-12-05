import { AboutMeComponent } from "src/Components/_Content/about-me/about-me.component";
import { WorkExperienceComponent } from "src/Components/_Content/work-experience/work-experience.component";
import { HeaderComponent } from "src/Components/header/header.component";
import { ComponentLoaderInterface } from "src/Interfaces/ComponentLoaderInterface";
import { ViewContainerRef } from '@angular/core';

export class PageTemplate {
    public readonly Template: ComponentLoaderInterface = {
        Header: {
            _Data: "",
            _ElementRef: "",
            _Component: HeaderComponent,
            _ViewContainerRef: ""
        },
        Components: {
            AboutMe: {
                _Data: "",
                _ElementRef: "",
                _Component: AboutMeComponent,
                _ViewContainerRef: ""
            },
            WorkExperience: {
                _Data: "",
                _ElementRef: "",
                _Component: WorkExperienceComponent,
                _ViewContainerRef: ""
            },
        }
    }

}