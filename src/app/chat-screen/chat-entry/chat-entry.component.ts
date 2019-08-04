import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat-entry',
  template: `
      <input #entryText (keyup.enter)="onAddEntry(entryText.value)"/>
      <button (click)="onAddEntry(entryText.value)">
          <i class="fas fa-paper-plane"></i>
      </button>
  `,
  styleUrls: ['./chat-entry.component.scss']
})
export class ChatEntryComponent implements OnInit {

  @ViewChild('entryText', {static: true}) entryInput: ElementRef;
  @Output() addEntry = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
    // setInterval(() => {
    //   this.addEntry.next(new Date().toISOString());
    // }, 4000);
  }


  onAddEntry(entryText: string) {
    console.log('ViewChild', this.entryInput.nativeElement.value);
    console.log('Value', entryText);
    this.addEntry.next(entryText);
    this.entryInput.nativeElement.value = '';
  }
}
