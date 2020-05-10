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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddTourTypeComponent,
    AdminComponent,
    AllToursComponent,
    UpdateTourTypeComponent
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
  entryComponents: [AddTourTypeComponent, UpdateTourTypeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
