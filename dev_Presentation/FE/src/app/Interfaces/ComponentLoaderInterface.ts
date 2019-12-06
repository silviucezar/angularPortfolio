export interface ComponentLoaderInterface {
    Header: ComponentData,
    Components: Components;
}

interface Components {
    AboutMe: ComponentData;
    WorkExperience: ComponentData;

}

interface ComponentData {
    data: any;
    viewContainerRef: any;
    component: object;
}