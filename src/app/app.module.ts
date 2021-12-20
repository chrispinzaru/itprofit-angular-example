import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule } from "@angular/forms";
import { UserVisibleDirective } from './user-profile/user-visible.directive';
import { ZoomDirective } from "./user-profile/zoom.directive";
import { UsersExampleComponent } from './comp/users-example/users-example.component';
import { PipesExampleComponent } from './comp/pipes-example/pipes-example.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    UserVisibleDirective,
    ZoomDirective,
    UsersExampleComponent,
    PipesExampleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
