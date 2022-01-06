import {ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from "@angular/router";
import { User } from "../core/user.interface";
import { mockUsers } from "../core/mock-users";


// ANGULAR ждёт пока Promise из resolve() не завершится
export class UsersResolver implements Resolve<User[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<User[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(mockUsers);
        }, )
    })
  }
}
