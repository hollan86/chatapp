import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageChatComponent } from './message-chat/message-chat.component'
import { MessagesPanelComponent } from './messages-panel/messages-panel.component';

import { AuthGuard } from '../../guards/auth.guard'

const messagesRoutes: Routes = [
  { path: 'messages',  component: MessagesPanelComponent, canActivate:[AuthGuard] },
  { path: 'message/:id', component: MessageChatComponent, canActivate:[AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(messagesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MessagesRoutingModule { }
