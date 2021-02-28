import { Component } from '@angular/core';
import { Authentication } from './components/login/auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventory-management';

  constructor() {}

  ngOnInit(): void {

  }
  
}
