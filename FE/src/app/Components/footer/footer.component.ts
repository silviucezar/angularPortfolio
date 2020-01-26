import { Component, OnInit } from '@angular/core';
import { LocaleService } from '../../Services/locale.service';
import { DataService } from 'src/app/Services/data.service';
import { Locale } from 'src/app/Interfaces/Locale';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  private currentLocale!:string;
  constructor(
    private locale: LocaleService,
    private dataService: DataService
  ) { 
    this.locale.getCurrentLocale().subscribe((localeValue:Locale)=>{ this.currentLocale = localeValue.locale });
  }

  ngOnInit() {
  }

  toggleLanguage() {
    this.dataService.setCurrentRouteDataUsingLang(this.locale.setCurrentLocale());
  }
}
