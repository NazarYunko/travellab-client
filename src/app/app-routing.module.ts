import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {AllToursComponent} from './admin/all-tours/all-tours.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin', component: AdminComponent, children: [{path: 'all-tours', component: AllToursComponent}]},
  {path: 'admin', redirectTo: '/admin/all-tours', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
