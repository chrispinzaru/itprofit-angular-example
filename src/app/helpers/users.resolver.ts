import {ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from "@angular/router";
import { User } from "../core/user.interface";
import { mockUsers } from "../core/mock-users";
import { UsersService } from "../core/users.service";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";


// ANGULAR ждёт пока Promise из resolve() не завершится
@Injectable()
export class UsersResolver implements Resolve<User[]> {

  constructor(private usersService: UsersService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
    return this.usersService.getAll();
  }
}
