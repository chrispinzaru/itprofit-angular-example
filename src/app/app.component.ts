import { Component } from '@angular/core';

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

  public handleProfileClick(event: MouseEvent) {
    console.log(event);
  }
}
