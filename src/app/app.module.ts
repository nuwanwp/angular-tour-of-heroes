import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Injector, LOCALE_ID, NgModule} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatDateFormats, MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {FedDateAdapter} from './custom-date-adaptor';
import {Platform, PlatformModule} from '@angular/cdk/platform';
import {registerLocaleData} from '@angular/common';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatInputModule,
    PlatformModule,
    MatSliderModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [
    MatNativeDateModule,
    { provide: DateAdapter, useClass: FedDateAdapter, deps: [MAT_DATE_LOCALE, Platform, Injector] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
