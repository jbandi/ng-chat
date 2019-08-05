import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat-screen',
  template: `
      <div id="screen">
          <div id="content">
              <div style="text-align:center">
                  <img width="100" alt="Angular Logo"
                       src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
              </div>
              <app-chat-list [entries]="messages"></app-chat-list>
              <app-chat-entry></app-chat-entry>
          </div>
      </div>
  `,
  styleUrls: ['./chat-screen.component.scss']
})
export class ChatScreenComponent implements OnInit {

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.startConversation();
    // Hack for the fact that on mobile devices 100vh might be overlapped by the toolbar
    // See:
    // - https://nicolas-hoizey.com/2015/02/viewport-height-is-taller-than-the-visible-part-of-the-document-in-some-mobile-browsers.html
    // - https://stackoverflow.com/questions/37112218/css3-100vh-not-constant-in-mobile-browser
    window.onresize = () => {
      // @ts-ignore
      document.querySelector('#screen').style.height = window.innerHeight + 'px';
    };
    // @ts-ignore
    window.onresize();

    // setTimeout( () =>  document.querySelector('#screen').style.height = window.innerHeight + 'px', 10);
  }

  get messages() {
    return this.chatService.chatMessages;
  }

}
