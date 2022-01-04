import {ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from "@angular/router";
import { User } from "../examples/comp/user-profile/user.interface";
import { mockUsers } from "../examples/comp/user-profile/mock-users";


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
