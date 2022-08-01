import { Component } from '@angular/core';
import { VERSION } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'header-app';
  version = VERSION;
}
