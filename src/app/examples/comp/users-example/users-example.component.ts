import {Component, OnInit} from '@angular/core';
import { User } from "../user-profile/user.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-users-example',
  templateUrl: './users-example.component.html',
  styleUrls: ['./users-example.component.scss']
})
export class UsersExampleComponent implements OnInit {
  public isVisible: boolean = true;
  public users: User[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.isVisible = this.activatedRoute.snapshot.data['isVisible'];
    this.users = this.activatedRoute.snapshot.data['users'];
  }

  public handleProfileClick(userId: number) {
    console.log("navigate to user page by userId");
    this.router.navigate([userId], {
      relativeTo: this.activatedRoute,
      queryParams: {
        hideAge: 0
      }
    });
  }
}
