import { AboutMeComponent } from "src/Components/_Content/about-me/about-me.component";
import { WorkExperienceComponent } from "src/Components/_Content/work-experience/work-experience.component";
import { HeaderComponent } from "src/Components/header/header.component";
import { ComponentLoaderInterface } from "src/Interfaces/ComponentLoaderInterface";

export class PageTemplate {
    public readonly Template: ComponentLoaderInterface = {
        Header: {
            _Data: "",
            _ElementRef: "",
            _Component: HeaderComponent
        },
        Components: {
            AboutMe: {
                _Data: "",
                _ElementRef: "",
                _Component: AboutMeComponent
            },
            WorkExperience: {
                _Data: "",
                _ElementRef: "",
                _Component: WorkExperienceComponent
            },
        }
    }
}