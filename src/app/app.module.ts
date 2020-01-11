import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { ChartModule } from 'angular2-chartjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AsideComponent } from './common/aside/aside.component';
import { ReportComponent } from './pages/report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    AsideComponent,
    ReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
