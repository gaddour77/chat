import * as Stomp from 'webstomp-client';
import * as SockJS from 'sockjs-client';

import { Injectable } from '@angular/core';
import { ChatMessage } from './models/chat-message.model';
import { RxStomp } from '@stomp/rx-stomp';
 


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private client  !: Stomp.Client;
  private url = 'http://localhost:8084/ws'; // URL de votre WebSocket

  constructor() { }

  connect(onMessageReceived: (message:ChatMessage) => void) {
    
    const socket = new SockJS(this.url);
    this.client = Stomp.over(socket);

    this.client.connect({}, frame => {
      console.log('Connected: ' + frame);

      this.client.subscribe('/topic/public', message => {
        const chatMessage: ChatMessage = JSON.parse(message.body);
        onMessageReceived(chatMessage);
      });
    });
  }

  sendMessage(chatMessage: ChatMessage) {
    this.client.send('/app/chat.sendMessage', JSON.stringify(chatMessage), {});
  }

  // Ajoutez d'autres méthodes selon les besoins
}
