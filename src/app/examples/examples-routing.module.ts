import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExamplesComponent} from "./comp/examples/examples.component";
import {UsersExampleComponent} from "./comp/users-example/users-example.component";
import {PipesExampleComponent} from "./comp/pipes-example/pipes-example.component";
import {ViewrefExampleComponent} from "./comp/template-variables-example/viewref-example/viewref-example.component";

const routes: Routes = [
  {
    path: '',
    component: ExamplesComponent,
    children: [
      {
        path: 'users',  //  /examples/pipes
        component: UsersExampleComponent
      },
      {
        path: 'pipes',
        component: PipesExampleComponent,
      },
      {
        path: 'viewref',
        component: ViewrefExampleComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
