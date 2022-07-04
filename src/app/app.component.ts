import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'auto-peric';

  isNavExpanded: boolean = false;

  toggleNav(to: boolean) {
    this.isNavExpanded = to;
  }
}
