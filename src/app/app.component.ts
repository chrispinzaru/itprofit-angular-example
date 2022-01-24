import { Component } from '@angular/core';
import {NavigationEnd, NavigationStart, Router, RouterEvent} from "@angular/router";
import {UsersService} from "./core/users.service";
import {filter, from, map, Observable, Observer, of, startWith} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'itprofit';

  numVariable: number;

  public isLoading: boolean = false;

  constructor(
    public usersService: UsersService,
    private router: Router,
  ) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart || event instanceof NavigationEnd)
    ).subscribe((event) => {
      console.log(`%c${event}`, 'color: green');

      if (event instanceof NavigationStart) {
        this.isLoading = true;
      } else if (event instanceof NavigationEnd) {
        this.isLoading = false;
      }
    })

    setTimeout(() => {
      this.numVariable = this.usersService.num;
    }, 0)
  }

}


