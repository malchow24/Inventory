import { Component, OnInit } from '@angular/core';
import { Authentication } from '../login/auth-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: Authentication) { }

  ngOnInit(): void {

  }

  onLogout() {
    this.auth.logout();
  }

}
