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
    this.router.events.subscribe((event) => {
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

    /*
    const obs$ = new Observable((observer: Observer<number>) => {
      [0, 1, 2, 3, 5, 6, 7].map((number) => {
        observer.next(number);
      });
    });
    obs$.subscribe(console.log);

    from([0, 1, 2, 3, 5, 6, 7]).pipe(
      filter((number) => number % 2 === 0),
      map((number) => number * 2),
    ).subscribe(console.log);

    from("abcde").subscribe(console.log);

    from([]).pipe(
      startWith("Please type your name")
    ).subscribe(console.log)

    of("STARTED", "FINISHED").subscribe(console.log);

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("SETTIMEOUT FINISHED")
      }, 3000);
    })

    from(promise).subscribe((value) => {
      console.log(value);
    })

     */
  }

}


