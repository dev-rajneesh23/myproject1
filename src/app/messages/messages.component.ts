import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../service/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public msg:MessagesService) { }

  ngOnInit(): void {
  }

}
