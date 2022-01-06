import { Injectable } from '@angular/core';
import { User } from "./user.interface";
import { mockUsers } from "./mock-users";

@Injectable({
  providedIn: 'root'
})
export class MockUsersService {

  constructor() { }

  public getAll(): User[] {
    return [...mockUsers];
  }
}
