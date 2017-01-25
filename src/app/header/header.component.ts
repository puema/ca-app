import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { LoginService } from '../login.service';
import {ContactsService} from "../data/contacts.service";

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
  @Input()
  isUserLoggedIn;
  @Output()
  updatedMockState = new EventEmitter();

  useMock : boolean = false;
  color : string = 'warn';

  constructor(private contactService : ContactsService,
              private loginService : LoginService) {
  }

  ngOnInit() {
    this.isUserLoggedIn = this.loginService.isUserLoggedIn();
  }

  toggleMock(value: boolean) {
    this.useMock = !this.useMock;
    this.contactService.setMock(this.useMock);
    this.updatedMockState.emit();
  }

  private onBack() : void {
    this.isBackVisible = false;
    this.isBackVisibleChange.emit(this.isBackVisible);
  }

  private onLogin () : void {
    window.location.href = LoginService.LOGIN_URL;
  }

  private onLogout () : void {
    this.loginService.logout();
  }
}
