import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { NotFoundComponent } from "./not-found/not-found.component";
import { HomeComponent } from "./home/home.component";
import {UsersService} from "./core/users.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    // {
    //   provide: UsersService,
    //   useClass: UsersService,
    //   deps: [MockUsersService]
    // }
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// Dependency Injection

// 1. Dependency (example: UserService)
// 2. Injector - Главный менеджер по зависимостям
// 3. Providers - Регистрации зависимостей
