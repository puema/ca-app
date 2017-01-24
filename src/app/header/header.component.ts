import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { LoginService } from '../login.service';

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

  constructor(private loginService : LoginService) {
  }

  ngOnInit() {
    this.isUserLoggedIn = this.loginService.isUserLoggedIn();
  }

  private onBack() : void {
    this.isBackVisible = false;
    this.isBackVisibleChange.emit(this.isBackVisible);
  }

  private onLogin () : void {
    console.log(1);
    window.location.href = LoginService.LOGIN_URL;
  }

  private onLogout () : void {
    this.loginService.logout();
  }
}
