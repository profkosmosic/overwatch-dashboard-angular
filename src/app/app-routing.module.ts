import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroTabComponent } from './hero-tab/hero-tab.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: "", component: HeroTabComponent},
  {path: "heroes/:key", component: HeroTabComponent},
  {path: "about", component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
