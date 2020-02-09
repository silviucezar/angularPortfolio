import { Component, OnInit, ElementRef } from '@angular/core';
import { PageLogic } from 'src/app/Services/page.logic.service';
import { Lang, LeaveMessage, LangTemplate, LocaleTranslations, References } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-leave-message',
  templateUrl: './leave-message.component.html',
  styleUrls: ['./leave-message.component.scss'],
  host: {
    style: 'position:relative',
    class: 'fadeMeIn'
  }
})
export class LeaveMessageComponent implements OnInit {

  private metadata: Lang<LeaveMessage> = { ro_RO: undefined, en_US: undefined };
  private locale: keyof LangTemplate = 'en_US';
  constructor(
    private pageLogic: PageLogic
  ) {
    this.pageLogic.currentLocaleTranslations$.subscribe((localeTranslations: LocaleTranslations | undefined) => {
      if (this.metadata[localeTranslations!.locale] !== undefined) return this.locale = localeTranslations!.locale;
      this.pageLogic.fetchComponentsMetadata('leave_message').then((metadata: References) => {
        this.locale = localeTranslations!.locale;
        this.metadata[this.locale] = metadata;
      });
    });
  }
  ngOnInit() { }

}
