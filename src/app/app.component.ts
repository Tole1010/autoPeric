import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'auto-peric';

  constructor(public router: Router) {}

  isNavExpanded: boolean = false;

  toggleNav(to: boolean) {
    this.isNavExpanded = to;
  }
}
