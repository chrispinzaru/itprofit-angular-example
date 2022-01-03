import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserVisibleDirective } from './user-profile/user-visible.directive';
import { ZoomDirective } from "./user-profile/zoom.directive";
import { UsersExampleComponent } from './comp/users-example/users-example.component';
import { PipesExampleComponent } from './comp/pipes-example/pipes-example.component';
import { TruncatePipe } from './comp/pipes-example/truncate.pipe';
import { UsersPipe } from './comp/pipes-example/users.pipe';
import { ViewrefExampleComponent } from "./comp/template-variables-example/viewref-example/viewref-example.component";
import { ViewrefChildComponent } from './comp/template-variables-example/viewref-child/viewref-child.component';
import { ExamplesComponent } from './comp/examples/examples.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    UserVisibleDirective,
    ZoomDirective,
    UsersExampleComponent,
    PipesExampleComponent,
    ViewrefExampleComponent,
    TruncatePipe,
    UsersPipe,
    ViewrefChildComponent,
    ExamplesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ExamplesRoutingModule
  ]
})
export class ExamplesModule { }
