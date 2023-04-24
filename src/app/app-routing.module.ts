import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookshelfComponent } from './components/bookshelf/bookshelf/bookshelf.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bookshelf', component: BookshelfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
