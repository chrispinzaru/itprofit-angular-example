import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from "@angular/router";
import { User } from "../core/user.interface";
import { mockUsers } from "../core/mock-users";

export class UserResolver implements Resolve<User> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User {
    const userId = Number(route.paramMap.get("userId"));
    return mockUsers.filter((user) => user.id == userId).pop() as User;
  }
}
