import {Component, OnInit, Optional, SkipSelf} from '@angular/core';
import { UsersService } from "../core/users.service";
import { User } from "../core/user.interface";
import { LocalUsersService } from "./local-users.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    {
      provide: UsersService,
      useClass: LocalUsersService
    }
  ]
})
export class HomeComponent implements OnInit {

  public users: User[];

  constructor(
    public usersService: UsersService,
  ) {
  }

  ngOnInit(): void {
    this.usersService.getAll().subscribe(users => this.users = users);
    console.log(this.users);
  }
}

