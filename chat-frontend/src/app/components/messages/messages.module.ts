import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesRoutingModule } from './messages-routing.module';
import { MessageService } from './message.service';
import { MessagesPanelComponent } from './messages-panel/messages-panel.component';
import { MessageChatComponent } from './message-chat/message-chat.component';

@NgModule({
  imports: [
    CommonModule,
    MessagesRoutingModule
  ],
  declarations: [MessagesPanelComponent, MessageChatComponent],
  providers:[MessageService]
})
export class MessagesModule { }
