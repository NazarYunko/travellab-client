import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserDetailsService} from './shared/service/user-details.service';
import {UrlInterceptor} from './shared/service/interceptor/url.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthorizationInterceptor} from './shared/service/interceptor/authorization.interceptor';
import {AuthenticationInterceptor} from './shared/service/interceptor/authentication.interceptor';
import {RefreshInterceptor} from './shared/service/interceptor/refresh.interceptor';
import {GlobalImportModule} from './shared/global-import.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AddTourTypeComponent } from './dialog/admin/add-tour-type/add-tour-type.component';
import { AdminComponent } from './admin/admin.component';
import { AllToursComponent } from './admin/all-tours/all-tours.component';
import { UpdateTourTypeComponent } from './dialog/admin/update-tour-type/update-tour-type.component';
import { MainPageComponent } from './home/main-page/main-page.component';
import { TourTypesComponent } from './home/tour-types/tour-types.component';
import { TourTypeComponent } from './home/tour-type/tour-type.component';
import { AddCountryComponent } from './dialog/admin/add-country/add-country.component';
import { UpdateCountryComponent } from './dialog/admin/update-country/update-country.component';
import { AllCountriesComponent } from './admin/all-countries/all-countries.component';
import { CountriesComponent } from './home/countries/countries.component';
import { CountryComponent } from './home/country/country.component';
import { AddHotelComponent } from './dialog/admin/add-hotel/add-hotel.component';
import { UpdateHotelComponent } from './dialog/admin/update-hotel/update-hotel.component';
import { AllHotelsComponent } from './admin/all-hotels/all-hotels.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddTourTypeComponent,
    AdminComponent,
    AllToursComponent,
    UpdateTourTypeComponent,
    MainPageComponent,
    TourTypesComponent,
    TourTypeComponent,
    AddCountryComponent,
    UpdateCountryComponent,
    AllCountriesComponent,
    CountriesComponent,
    CountryComponent,
    AddHotelComponent,
    UpdateHotelComponent,
    AllHotelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GlobalImportModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserDetailsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: RefreshInterceptor,
      multi: true
    }
  ],
  entryComponents: [AddTourTypeComponent,
    UpdateTourTypeComponent,
    AddCountryComponent,
    UpdateCountryComponent,
    AddHotelComponent,
    UpdateHotelComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
