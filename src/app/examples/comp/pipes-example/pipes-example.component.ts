import { Component, OnInit } from '@angular/core';
import { mockUsers } from '../../../core/mock-users';
import { User } from "../../../core/user.interface";

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.scss']
})
export class PipesExampleComponent implements OnInit {

  pi: number = Math.PI;
  amount: number = 0.075;

  text: string = "course of itprofit";

  now: Date = new Date();

  user: User;
  users: User[]

  maxLength: number = 10;

  constructor() {
    this.users = [...mockUsers];
    this.user = this.users.pop() as User;
  }

  ngOnInit(): void {
  }

  onAddUser() {
    let newUser: User = {
      name: "Bro",
      age: 23,
      id: 12321421,
      avatarUrl: "",
      email: "",
      lastname: "",
    };

    this.users.push(newUser);
  }

}
