import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat-entry',
  template: `
      <input #entryText
             (keyup.enter)="onAnswer(entryText.value)"
             placeholder="Type your answer ..."
      />
      <button (click)="onAnswer(entryText.value)">
          <i class="fas fa-paper-plane"></i>
      </button>
  `,
  styleUrls: ['./chat-entry.component.scss']
})
export class ChatEntryComponent implements OnInit {

  @ViewChild('entryText', {static: true}) entryInput: ElementRef;
  @Output() addAnswer = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
    // setInterval(() => {
    //   this.addAnswer.next(new Date().toISOString());
    // }, 4000);
  }

  onAnswer(answerText: string) {
    if (answerText) {
      this.addAnswer.next(answerText);
      this.entryInput.nativeElement.value = '';
    }
  }
}
