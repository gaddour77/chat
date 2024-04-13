import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../websocket.service';
import { ChatMessage } from '../models/chat-message.model';
import { ChatService } from '../chat.service';
import { RxStompService } from '../rx-stomp.service';
import 'web-animations-js';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  constructor(private webSocketService: WebSocketService,private chatService :ChatService) { }
  messages: ChatMessage[] = [];
  newMessageContent: string = '';
  sender: string = 'Username';
  message ?:ChatMessage;
  messagess: any[] = [];
  
    
  

  ngOnInit(): void {
    this.loadMessages(1);
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
  loadMessages(chatId: Object) {
    this.chatService.chats(chatId).subscribe({
      next: (data) => this.messagess = data,
      error: (error) => console.error('Error fetching messages:', error)
    });
  }
}
