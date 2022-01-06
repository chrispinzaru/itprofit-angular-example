import { Component, OnInit } from '@angular/core';
import { UsersService } from "../core/users.service";
import { User } from "../core/user.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public users: User[];

  constructor(
    private usersService: UsersService,
  ) {
  }

  ngOnInit(): void {
    this.users = this.usersService.getAll();
    console.log(this.users);
  }
}
