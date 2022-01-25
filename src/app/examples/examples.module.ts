import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { UserProfileComponent } from './comp/user-profile/user-profile.component';
import { UserVisibleDirective } from './comp/user-profile/user-visible.directive';
import { ZoomDirective } from "./comp/user-profile/zoom.directive";
import { UsersExampleComponent } from './comp/users-example/users-example.component';
import { PipesExampleComponent } from './comp/pipes-example/pipes-example.component';
import { TruncatePipe } from './comp/pipes-example/truncate.pipe';
import { UsersPipe } from './comp/pipes-example/users.pipe';
import { ViewrefExampleComponent } from "./comp/template-variables-example/viewref-example/viewref-example.component";
import { ViewrefChildComponent } from './comp/template-variables-example/viewref-child/viewref-child.component';
import { ExamplesComponent } from './comp/examples/examples.component';
import { UserPageComponent } from './comp/user-page/user-page.component';
import { FormsComponent } from './comp/forms/forms.component';

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
    UserPageComponent,
    FormsComponent,
  ],
  exports: [
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
    UserPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ExamplesRoutingModule
  ]
})
export class ExamplesModule { }
