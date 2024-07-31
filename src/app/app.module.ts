import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AnnualReportComponent } from './components/annual-report/annual-report.component';
import { AnnualReportDetailsComponent } from './components/annual-report-details/annual-report-details.component';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AnnualReportComponent,
    AnnualReportDetailsComponent,
    CurrencyFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
