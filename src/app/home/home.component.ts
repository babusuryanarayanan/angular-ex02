import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private commonService:CommonService) { }

  ngOnInit() {
  }

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.commonService.sendMessage('Message from Home Component to App Component!');
}

clearMessages(): void {
    // clear messages
    this.commonService.clearMessages();
}

}
