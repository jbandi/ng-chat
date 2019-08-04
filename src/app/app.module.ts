import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatMessageProgressComponent } from './chat-message/chat-message-progress/chat-message-progress.component';
import { ChatEntryComponent } from './chat-entry/chat-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatListComponent,
    ChatMessageComponent,
    ChatMessageProgressComponent,
    ChatEntryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
