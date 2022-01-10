import {ReqResUser, User} from "./user.interface";
import { Injectable } from "@angular/core";
import { MockUsersService } from "./mock-users.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import { map, Observable} from "rxjs";


// Позволяет Angular-у делать Tree-Shaking
// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class UsersService {

  public num: number;

  constructor(
    private mockUsersService: MockUsersService,
    private httpClient: HttpClient,
  ) {
    this.num = Math.random();

    // this.httpClient.get("https://reqres.in/api/users/23").subscribe({
    //   next: (value) => {
    //     console.log(value);
    //   },
    //   error: (err) => {
    //     console.warn(err);
    //   },
    //   complete: () => {
    //     console.log("Complete");
    //   }
    // });
    //
    // return this.httpClient.get("https://reqres.in/api/users").subscribe(
    //   (value) => {
    //     console.log(value);
    //   }
    // );
  }

  public getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>("https://reqres.in/api/users", {
      params: new HttpParams().set("per_page", 12)
    }).pipe(
      map((usersResponse: any) => usersResponse.data.map((userData: ReqResUser) => {
        return {
          id: userData.id,
          name: userData.first_name,
          lastname: userData.last_name,
          email: userData.email,
          avatarUrl: userData.avatar
        } as User;
      }))
    );
  }
  //
  // public get(id: number): Observable<User> {
  //
  // }
}
