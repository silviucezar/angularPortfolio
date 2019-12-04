export interface ComponentLoaderInterface {
    Header: ComponentData,
    Components: Components;
}

interface Components {
    AboutMe: ComponentData;
    WorkExperience: ComponentData;

}

interface ComponentData {
    _Data: any;
    _ElementRef: any;
    _Component: any;
}