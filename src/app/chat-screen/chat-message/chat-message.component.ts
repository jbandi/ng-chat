import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  template: `
      <div style="position: relative">
          <app-chat-message-progress *ngIf="showBubbles" style="position: absolute"></app-chat-message-progress>
          <div *ngIf="!showBubbles" [ngClass]="animationClass">
              <p [ngClass]="bubbleClass">
                  {{messageText}}
              </p>
          </div>
      </div>
  `,
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {

  @Input() messageText: string;
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
      this.animationClass = 'animated slideInLeft';
      this.bubbleClass = 'leftBubble';
      this.showBubbles = true;
      setTimeout(() => {
        this.showBubbles = false;
      }, 2200);
    }
  }


}
