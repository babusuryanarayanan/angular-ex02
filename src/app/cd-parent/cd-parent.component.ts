import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cd-parent',
  templateUrl: './cd-parent.component.html',
  styleUrls: ['./cd-parent.component.scss']
})
export class CdParentComponent implements OnInit {

  users:Array<any> = [{}]

  constructor() { }

  ngOnInit() {
  }

  onClick(name,age) {
      this.users.push({name:name, age:age});
      // this.users = this.users.concat({name:name, age:age});
  }

}
