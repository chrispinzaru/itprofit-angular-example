import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExamplesComponent} from "./comp/examples/examples.component";
import {UsersExampleComponent} from "./comp/users-example/users-example.component";
import {PipesExampleComponent} from "./comp/pipes-example/pipes-example.component";
import {ViewrefExampleComponent} from "./comp/template-variables-example/viewref-example/viewref-example.component";
import {UsersResolver} from "../helpers/users.resolver";
import {IsAdminGuard} from "../helpers/is-admin.guard";
import {UserResolver} from "../helpers/user.resolver";
import {UserPageComponent} from "./comp/user-page/user-page.component";
import {FormsComponent} from "./comp/forms/forms.component";


const routes: Routes = [
  {
    path: '',
    component: ExamplesComponent,
    children: [
      {
        path: 'users',  //  /examples/pipes
        data: {
          isVisible: true
        },
        resolve: {
          users: UsersResolver,
        },
        component: UsersExampleComponent
      },
      {
        path: 'users/:userId',
        component: UserPageComponent,
        resolve: {
          user: UserResolver,
        }
      },
      {
        path: 'pipes',
        component: PipesExampleComponent,
        canActivate: [
          IsAdminGuard
        ]
      },
      {
        path: 'viewref',
        component: ViewrefExampleComponent,
      },
      {
        path: 'forms',
        component: FormsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    UsersResolver,
    UserResolver,
  ],
})
export class ExamplesRoutingModule { }
