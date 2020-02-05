import { ComponentsData } from './ComponentsMetadata';

export interface UrlSubscription {
    dataToFetch: keyof ComponentsData;
    path: string;
}