import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroTabComponent } from './hero-tab/hero-tab.component';

const routes: Routes = [
  {path: "", component: HeroTabComponent},
  {path: "heroes/:key", component: HeroTabComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
