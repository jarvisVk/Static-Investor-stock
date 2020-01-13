import { Component, ViewEncapsulation, AfterViewInit } from '@angular/core';
import * as Feather from 'feather-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit{
  
  ngAfterViewInit() {
    Feather.replace();
  }
  
}
