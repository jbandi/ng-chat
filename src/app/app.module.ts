import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatScreenComponent } from './chat-screen/chat-screen.component';
import { ChatListComponent } from './chat-screen/chat-list/chat-list.component';
import { ChatMessageComponent } from './chat-screen/chat-message/chat-message.component';
import { ChatMessageProgressComponent } from './chat-screen/chat-message-progress/chat-message-progress.component';
import { ChatEntryComponent } from './chat-screen/chat-entry/chat-entry.component';
import { ChatEntryTextComponent } from './chat-screen/chat-entry-text/chat-entry-text.component';
import { ChatEntryOptionsComponent } from './chat-screen/chat-entry-options/chat-entry-options.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatListComponent,
    ChatMessageComponent,
    ChatMessageProgressComponent,
    ChatEntryComponent,
    ChatScreenComponent,
    ChatEntryTextComponent,
    ChatEntryOptionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
