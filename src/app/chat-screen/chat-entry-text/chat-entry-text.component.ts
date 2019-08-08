import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-entry-text',
  template: `
      <input #entryText
             (keyup.enter)="onAnswer(entryText.value)"
             placeholder="Type your answer ..."
      />
      <button (click)="onAnswer(entryText.value)">
          <i class="fas fa-paper-plane"></i>
      </button>
  `,
  styleUrls: ['./chat-entry-text.component.scss']
})
export class ChatEntryTextComponent implements OnInit, AfterViewInit {

  @ViewChild('entryText', {static: true}) entryInput: ElementRef;

  constructor(private chatService: ChatService) {}

  ngOnInit() { }

  onAnswer(answerText: string) {
    if (answerText) {
      this.chatService.addAnswer(answerText);
      this.entryInput.nativeElement.value = '';
    }
  }

  ngAfterViewInit(): void {
    this.entryInput.nativeElement.focus();
  }


}
