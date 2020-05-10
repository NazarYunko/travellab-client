import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {AllToursComponent} from './admin/all-tours/all-tours.component';
import {MainPageComponent} from './home/main-page/main-page.component';
import {TourTypesComponent} from './home/tour-types/tour-types.component';
import {TourTypeComponent} from './home/tour-type/tour-type.component';
import {AllCountriesComponent} from './admin/all-countries/all-countries.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children:
      [
        {path: '', component: MainPageComponent},
        {path: 'tour-types', component: TourTypesComponent},
        {path: 'tour-types/:id', component: TourTypeComponent}
      ]
  },
  {
    path: 'admin', component: AdminComponent, children: [
      {path: 'all-tours', component: AllToursComponent},
      {path: 'all-countries', component: AllCountriesComponent}
    ]
  },
  {path: 'admin', redirectTo: '/admin/all-tours', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
