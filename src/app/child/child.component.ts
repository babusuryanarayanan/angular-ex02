import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() flag : boolean;
  @Output() eventEmitted : EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  onClick(data) {
    this.eventEmitted.emit(data);
  }

  

}
