import { User } from "../core/user.interface";

export class LocalUsersService {

  public num: number;

  constructor() {
    this.num = Math.random();
  }


  public getAll(): User[] {
    return [
      {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "name": "Michael",
        "lastname": "Lawson",
        "age": 25,
        "avatarUrl": "https://reqres.in/img/faces/7-image.jpg"
      },
    ]
  }

}
