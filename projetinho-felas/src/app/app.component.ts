import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username = '';
  showPassword = false;

  clicks = [];
  getBack() {
    return this.clicks ? 'blue' : 'none';
  }
  showSecretPassword() {
    this.clicks.push(this.clicks.length + 1);
    this.showPassword = !this.showPassword;
  }
  constructor() {}
}
