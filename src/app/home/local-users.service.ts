import { User } from "../core/user.interface";
import { Observable, of } from "rxjs";

export class LocalUsersService {

  public num: number;

  constructor() {
    this.num = Math.random();
  }

  public getAll(): Observable<User[]> {
    return of([
      {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "name": "Michael",
        "lastname": "Lawson",
        "age": 25,
        "avatarUrl": "https://reqres.in/img/faces/7-image.jpg"
      },
    ]);
  }

}
