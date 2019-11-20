import { Component } from '@angular/core';
import { CommonService } from './services/common.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-ex02';
  l_flag = true;
  messages: any[] = [];
    subscription: Subscription;
  constructor(private commonService:CommonService) { 
     // subscribe to home component messages
     this.subscription = this.commonService.getMessage().subscribe(message => {
      if (message) {
        this.messages.push(message);
      } else {
        // clear messages when empty message received
        this.messages = [];
      }
    });

  }

  

  showMessage(emittedData) {
    console.log(`inside parent ${emittedData}`);
  }

  
}
