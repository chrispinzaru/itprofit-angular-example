import { User } from "./user.interface";
import { Injectable } from "@angular/core";
import { MockUsersService } from "./mock-users.service";


// Позволяет Angular-у делать Tree-Shaking
// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class UsersService {
  constructor(
    private mockUsersService: MockUsersService,
  ) {
    console.log(mockUsersService);
  }

  public getAll(): User[] {
    return this.mockUsersService.getAll();
  }
}
