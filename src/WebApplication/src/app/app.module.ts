import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvestorsDashboardComponent } from './investors-dashboard/investors-dashboard.component';
import { InvestorsPositionsComponent } from './investors-positions/investors-positions.component';

@NgModule({
  declarations: [
    AppComponent,
    InvestorsDashboardComponent,
    InvestorsPositionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
