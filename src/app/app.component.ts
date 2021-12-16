import { Component } from '@angular/core';
import { User } from './user-profile/user.interface';
import { mockUsers } from './user-profile/mock-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'itprofit';

  public userName: string = "Alex";
  public userLastname: string = "Shevchenco";
  public userAge: number = -110;
  public userAvatarUrl: string = "https://reqres.in/img/faces/7-image.jpg";

  public isVisible: boolean = true;

  public users: User[] = [...mockUsers];

  public handleProfileClick(event: MouseEvent) {
    console.log(event);
  }
}


