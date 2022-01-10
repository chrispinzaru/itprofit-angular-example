import {Component, OnInit} from '@angular/core';
import { User } from "../../../core/user.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../../../core/users.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-users-example',
  templateUrl: './users-example.component.html',
  styleUrls: ['./users-example.component.scss']
})
export class UsersExampleComponent implements OnInit {
  public isVisible: boolean = true;

  public users$: Observable<User[]>
  public users: User[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
  ) {
  }

  ngOnInit() {
    this.isVisible = this.activatedRoute.snapshot.data['isVisible'];
    // this.users = this.activatedRoute.snapshot.data['users'];

    this.users$ = this.usersService.getAll();
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

  public trackByFunction(index: number, user: User): number {
    return user.id;
  }
}
