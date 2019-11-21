import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-cd-child',
  templateUrl: './cd-child.component.html',
  styleUrls: ['./cd-child.component.scss'],
  changeDetection : ChangeDetectionStrategy.Default
})
export class CdChildComponent implements OnInit {

  @Input() users;

  constructor(private cdref:ChangeDetectorRef) { 
    // used if CD Strategy is default and comment mark for check
    // this.cdref.detach();
  }

  ngOnInit() {
  }

  ngDoCheck() {
    // used if CD Strategy is on push
    // this.cdref.markForCheck();
  }

}
