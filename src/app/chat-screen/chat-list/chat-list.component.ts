import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat-list',
  template: `
      <div id="list" #scrollMe [scrollTop]="scrollMe.scrollHeight">
          <div *ngFor="let entry of entries; odd as isOdd">
              <app-chat-message [messageText]="entry" [isOdd]="isOdd"></app-chat-message>
          </div>

      </div>
  `,
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent {
  @Input() entries: string[];

  constructor() {
  }
}
