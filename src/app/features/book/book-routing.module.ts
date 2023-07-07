import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book.component';
import { IndexComponent } from './pages/index/index.component';
import { AddComponent } from './pages/add/add.component';
import { IsAdminGuard } from 'src/app/core/guards/is-admin.guard';

const routes: Routes = [{ path: '', component: BookComponent, children: [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'add', component: AddComponent, canActivate: [ IsAdminGuard ] },
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
