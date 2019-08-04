import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-message-progress',
  template: `
      <div >
          <div class="progress">
              <span>.</span><span>.</span><span>.</span>
          </div>
      </div>
  `,
  styleUrls: ['./app-chat-message-progress.scss']
})
export class ChatMessageProgressComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }


}
