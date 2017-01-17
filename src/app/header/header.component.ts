import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Input()
  isBackVisible;
  @Output()
  isBackVisibleChange : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  private onBack() : void {
    this.isBackVisible = false;
    this.isBackVisibleChange.emit(this.isBackVisible);
  }

}
