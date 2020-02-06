import { Component, OnInit, Input } from '@angular/core';
import { FooterTemplate, LangTemplate } from 'src/app/Interfaces/interfaces';
import { PageLogic } from 'src/app/Services/page.logic.service';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() metadata: FooterTemplate | undefined = undefined;
  @Input() locale: keyof LangTemplate | undefined = undefined;
  private isContactActive: boolean = false;
  private loadingMetadata: boolean = true;

  constructor(
    private pageLogic: PageLogic,
    private http: HttpService
  ) {
    this.http.activeRequestsCount$.subscribe((activeRequests: number) => this.loadingMetadata = Boolean(activeRequests));
  }

  ngOnInit() { }

  toggleLanguage() {
    this.locale = this.locale === 'ro_RO' ? 'en_US' : 'ro_RO'
    this.pageLogic.updateMetadataParams(this.locale);
  }

  toggleContact() { this.isContactActive = !this.isContactActive; }
}
