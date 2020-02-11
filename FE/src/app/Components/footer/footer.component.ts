import { Component, OnInit, Input } from '@angular/core';
import { FooterTemplate, LangTemplate } from 'src/app/Interfaces/interfaces';
import { PageLogic } from 'src/app/Services/page.logic.service';
import { HttpService } from 'src/app/Services/http.service';
import { InitService } from 'src/app/Services/init.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() metadata: FooterTemplate | undefined = undefined;
  @Input() locale!: keyof LangTemplate;
  private isContactActive: boolean = false;
  private loadingMetadata: boolean = true;
  private telHRef:string = '';
  constructor(
    private pageLogic: PageLogic,
    private http: HttpService,
    private initService:InitService
  ) {
    this.http.activeRequestsCount$.subscribe((activeRequests: number) => {
      this.loadingMetadata = Boolean(activeRequests);
      if (activeRequests === 0) {
        this.initService.removeGlobalLoading()
        this.pageLogic.fadeInContent();
      } ;
    });
  }

  ngOnInit() { 
    // this.telHRef = this.metadata!.phone_no
  }

  toggleLanguage() {
    this.locale = this.locale === 'ro_RO' ? 'en_US' : 'ro_RO'
    this.pageLogic.updateMetadataParams(this.locale);
  }

  toggleContact() { this.isContactActive = !this.isContactActive; }
}
