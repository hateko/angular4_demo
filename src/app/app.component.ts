import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  darkTheme = false;
  switchTheme(dark) {
    this.darkTheme = dark;
    console.log(dark);
  }
}
