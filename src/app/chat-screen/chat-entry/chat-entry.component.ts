import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-entry',
  template: `
    <ng-container [ngSwitch]="questionType">
        <app-chat-entry-options *ngSwitchCase="'choice'" [options]="options"></app-chat-entry-options>
        <app-chat-entry-text *ngSwitchDefault></app-chat-entry-text>
    </ng-container>
  `,
  styleUrls: ['./chat-entry.component.scss']
})
export class ChatEntryComponent {


  constructor(private chatService: ChatService) {
  }

  get questionType() {
    return this.chatService.currentQuestion.questionType;
  }

  get options() {
    return this.chatService.currentQuestion.options;
  }
}
