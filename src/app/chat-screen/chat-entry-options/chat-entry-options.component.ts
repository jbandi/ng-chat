import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-entry-options',
  template: `
      <button *ngFor="let option of options" (click)="addAnswer(option)">{{option}}</button>
  `,
  styleUrls: ['./chat-entry-options.component.scss']
})
export class ChatEntryOptionsComponent implements OnInit {

  @Input() options: string[];

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
  }

  addAnswer(option: string) {
    this.chatService.addAnswer(option);
  }
}
