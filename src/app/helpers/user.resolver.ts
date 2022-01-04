import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from "@angular/router";
import { User } from "../examples/comp/user-profile/user.interface";
import { mockUsers } from "../examples/comp/user-profile/mock-users";

export class UserResolver implements Resolve<User> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User {
    const userId = Number(route.paramMap.get("userId"));
    return mockUsers.filter((user) => user.id == userId).pop() as User;
  }
}
