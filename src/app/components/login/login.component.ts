import { Component, OnInit } from '@angular/core';
import { Authentication } from './auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: Authentication) { }

  ngOnInit(): void {

  }

  onSignin(email: string, password: string) {
    this.auth.signin(email, password);
  }

}
