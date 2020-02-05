import { Component, OnInit } from '@angular/core';
import { LocaleService } from '../../Services/locale.service';
import { DataService } from 'src/app/Services/data.service';
import { Locale } from 'src/app/Interfaces/Locale';
import { PageLogic } from 'src/app/Services/page.logic.service';
import { Lang } from 'src/app/Interfaces/ComponentsMetadata';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  private currentLocale: keyof Lang = 'en_US';
  private isContactActive: boolean = false;
  private loadingMetadata: any = true;

  constructor(
    private locale: LocaleService,
    private pageLogic: PageLogic,
    private dataService:DataService
  ) {
    this.locale.getCurrentLocale().subscribe((localeValue: Locale) => { this.currentLocale = localeValue.locale as keyof Lang });
    this.pageLogic.loadingMetadata$.subscribe((state: boolean) => this.loadingMetadata = state);
  }

  ngOnInit() { }

  toggleLanguage() {
    this.currentLocale = this.currentLocale === 'ro_RO' ? 'en_US' : 'ro_RO';
    this.locale.setCurrentLocale(this.currentLocale);
    this.dataService.setRouteMetadata();
  }

  toggleContact() { this.isContactActive = !this.isContactActive; }
}
