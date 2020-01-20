import { Component, OnInit } from '@angular/core';
import { LocaleService } from '../../Services/locale.service';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private locale: LocaleService,
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  toggleLanguage() {
    this.dataService.setCurrentRouteDataUsingLang(this.locale.setCurrentLocale());
  }
}
