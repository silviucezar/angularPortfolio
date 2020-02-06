import { Component, OnInit, Input } from '@angular/core';
import { LocaleService } from '../../Services/locale.service';
import { Locale, FooterTemplate, LangTemplate } from 'src/app/Interfaces/interfaces';
import { PageLogic } from 'src/app/Services/page.logic.service';
import { Lang } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() metadata: FooterTemplate | undefined = undefined;
  @Input() locale: keyof LangTemplate | undefined = undefined;
  private isContactActive: boolean = false;
  private loadingMetadata: any = true;

  constructor(
    private pageLogic: PageLogic
  ) {
    // this.pageLogic.loadingMetadata$.subscribe((state: boolean) => this.loadingMetadata = state);
  }

  ngOnInit() { }

  toggleLanguage() {
    console.log(this.locale)
    this.pageLogic.updateLocale(this.locale === 'ro_RO' ? 'en_US': 'ro_RO');
  }

  toggleContact() { this.isContactActive = !this.isContactActive; }
}
