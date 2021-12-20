import { Component, OnInit } from '@angular/core';
import { mockUsers } from '../../user-profile/mock-users';
import {User} from "../../user-profile/user.interface";

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

  constructor() {
    this.user = [...mockUsers].pop() as User;
  }

  ngOnInit(): void {
  }

}
