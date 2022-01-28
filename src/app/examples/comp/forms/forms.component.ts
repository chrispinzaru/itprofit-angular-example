import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  debounceTime, distinctUntilChanged, filter,
  Observable, of,
  ReplaySubject,
  shareReplay,
  Subject,
  Subscription, switchMap,
  takeUntil,
} from "rxjs";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit, OnDestroy {

  loginForm: LoginForm = {
    login: '',
    password: '',
  }

  private subscriptions: Subscription[] = [];

  private loginChangeSource: ReplaySubject<string> = new ReplaySubject<string>(1);
  public loginChange$: Observable<string> = this.loginChangeSource.asObservable().pipe(
    shareReplay()
  );

  private destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  ngOnInit(): void {
    const subscription = this.loginChange$.pipe(
      takeUntil(this.destroyed$),
      filter((value) => value.length >= 3),
      distinctUntilChanged(),
      debounceTime(500),
      switchMap((login: string) => {
        // do unique login request check
        return of(Math.random() < 0.5);
      })
    ).subscribe((value) => {
      console.log(`%cYour login is unique: ` + value, "color: darkgreen;");
    });

    this.subscriptions.push(subscription);
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
    // this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  onChange(event: any) {
    this.loginChangeSource.next(event);
  }
}

type LoginForm = {
  login: string,
  password: string,
}
