import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat-list',
  template: `
      <div id="list" #scrollMe [scrollTop]="scrollMe.scrollHeight">
          <div *ngFor="let entry of entries; odd as isOdd">
              <app-chat-message [entry]="entry" [isOdd]="isOdd"></app-chat-message>
          </div>

      </div>
  `,
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {
  @Input() entries: string[];

  // @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  constructor() {
  }

  ngOnInit() {
    // setInterval(() => {
    //   this.entries.push(new Date().toISOString());
    // }, 2000);
  }

}
