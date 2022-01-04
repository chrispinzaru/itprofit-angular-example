import { Component } from '@angular/core';
import {NavigationEnd, NavigationStart, Router, RouterEvent} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'itprofit';

  public isLoading: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      console.log(`%c${event}`, 'color: green');
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      } else if (event instanceof NavigationEnd) {
        this.isLoading = false;
      }
    })
  }

}


