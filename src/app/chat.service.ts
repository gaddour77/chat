import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  readonly url = 'http://localhost:8084';
  readonly end = "api/chats"
  constructor(private http : HttpClient) { }
 chats(inputData : object):Observable<any>{
  return this.http.get(`${this.url}/${this.end}/${inputData}`);
 }
}
