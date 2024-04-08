import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../websocket.service';
import { ChatMessage } from '../models/chat-message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: ChatMessage[] = [];
  newMessageContent: string = '';
  sender: string = 'Username';
  message:String='ali';

  constructor(private webSocketService: WebSocketService) { }

  ngOnInit(): void {
    this.webSocketService.connect((message) => {
      this.messages.push(message);
    });
  }

  sendMessage(): void {
    if (this.newMessageContent.trim() !== '') {
      const message = new ChatMessage(this.newMessageContent, this.sender);
      this.webSocketService.sendMessage(message);
      this.newMessageContent = '';
    }
  }
}
