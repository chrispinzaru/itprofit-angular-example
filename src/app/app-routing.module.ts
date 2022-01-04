import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
  },
  {
      path: 'examples',
      loadChildren: () => import('./examples/examples.module').then(m => m.ExamplesModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule {

}
