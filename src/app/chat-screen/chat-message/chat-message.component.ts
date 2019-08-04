import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  template: `
    <div style="position: relative">
      <app-chat-message-progress *ngIf="showBubbles" style="position: absolute"></app-chat-message-progress>
      <div [ngClass]="animationClass">
          <p [ngClass]="bubbleClass">
              {{entry}}
          </p>
      </div>
    </div>
  `,
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {

  @Input() entry: string;
  @Input() isOdd: boolean;
  animationClass: string;
  bubbleClass: string;
  showBubbles = false;

  constructor() {
  }

  ngOnInit() {
    if (this.isOdd) {
      // this.animationClass = 'animated slideInRight ';
      this.animationClass = '';
      this.bubbleClass = 'rightBubble';
    } else {
      this.animationClass = 'animated slideInLeft delay-2s';
      this.bubbleClass = 'leftBubble';
      this.showBubbles = true;
      setTimeout(() => {
        this.showBubbles = false;
      }, 2200);
    }
  }


}
