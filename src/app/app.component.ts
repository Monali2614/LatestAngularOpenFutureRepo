import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OpenFutureWebsiteDesign';

  constructor(private router: Router) {}

  isAdminRoute(): boolean {
    return this.router.url.includes('/admin');
  }

  isResetPasswordRoute(): boolean {
    return this.router.url.includes('/reset-password');
  }
}
