import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Authentication } from '../login/auth-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(private auth: Authentication) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.auth.loggedIn;
  }

  onLogout() {
    this.auth.logout();
    this.isLoggedIn$ = this.auth.loggedIn;
  }

}
