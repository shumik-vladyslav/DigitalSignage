import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


import { MessageService} from '../services/message-service';
import { MessageTools } from './message-tools';
import { MessageList } from './message-list';

interface Message{

}

@Component({
    selector: 'div',
    template: `<div class ="panel panel-default">
               <div class="panel-heading">
               <message-tools (added)="onMessagesAdded($event)" (deleted)="onMessagesDeleted($event)"></message-tools>
               </div>
               <div class="panel-body">
               <message-list [messages]="messages"></message-list>
               </div>
               </div>`,
    styleUrls: ['app/messages/messages-main.css'],
    directives: [MessageTools, MessageList, ROUTER_DIRECTIVES],
    providers: [MessageService]
})
export class MessagesMain implements OnInit {
    errorMessage: string;
    messages: Message[];
    mode = 'Observable';

    constructor (
        private messageService: MessageService
                )
    {
        this.messages =[];
    }

    ngOnInit () {
        this.getMessages();
    }

    getMessages() {
        this.messageService.getMessages()
            .subscribe(
                messages => this.messages = messages,
                error =>  this.errorMessage = <any>error);{
        }
    }

    saveMessage (name: string) {
        if (!name) { return; }
        this.messageService.addMessage(name)
            .subscribe(
                message  => this.messages.push(message),
                error =>  this.errorMessage = <any>error);
    }

    onMessagesAdded (message: Message) {
        this.messages.push(message);
    }

    onMessageDeleted (message: Message) {
        let item: Message;
        this.messages.forEach(function(message){
            if (message.selected === true) item = message;
        });
        if (item) {
            let index = this.messages.indexOf(item);
            if (index > -1) {
                this.messages.splice(index, 1);
            }
        }
    }
}