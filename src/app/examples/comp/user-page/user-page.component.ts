import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "../user-profile/user.interface";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  public user: User;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const user = {...this.activatedRoute.snapshot.data['user']};
    const shouldHideAge = this.activatedRoute.snapshot.queryParamMap.get("hideAge");

    if (Number(shouldHideAge) === 1) {
      user.age = 0;
    }

    this.user = user;
  }

}
