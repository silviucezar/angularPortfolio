import { Component, OnInit } from '@angular/core';
import {LocaleService} from '../../Services/locale.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private locale:LocaleService) { }

  ngOnInit() {
  }

  toggleLanguage() {
    this.locale.setCurrentLocale();
  }
}
