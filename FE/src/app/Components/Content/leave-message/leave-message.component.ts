import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PageLogic } from 'src/app/Services/page.logic.service';
import { Lang, LeaveMessage, LangTemplate, LocaleTranslations, References } from 'src/app/Interfaces/interfaces';
import { NgForm, FormGroup } from '@angular/forms';

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

  private displayThanks: boolean = false;
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

  async sendFeedback(feedback: string) {
    this.displayThanks = true;
    console.log( this.metadata[this.locale])
    await this.pageLogic.sendFeedback(feedback);
    setTimeout(() => { this.displayThanks = false; }, 2000);

  }
}
