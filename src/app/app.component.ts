import {Component, Injector, LOCALE_ID} from '@angular/core';
import {FormatWidth, getLocaleDateFormat, registerLocaleData} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';

  date = '2021-12-15';

  constructor(private injector: Injector) {


  }
}
