import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ScaffoldModule } from './scaffold/scaffold.module';

import { NgChartsConfiguration, NgChartsModule } from 'ng2-charts';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcumbService } from './breadcumb.service';
import { HeaderInterceptor } from './core/interceptors/header.interceptor';
import { BreadcumbComponent } from './core/breadcumb/breadcumb.component';
import { JwtModule } from '@auth0/angular-jwt';
import tokenGetter from './core/token-getter';
import { PagenotfoundComponent } from './core/pagenotfound/pagenotfound.component';





@NgModule({
  declarations: [
    AppComponent,
    BreadcumbComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false}),
    BrowserAnimationsModule,
    ScaffoldModule,
    NgChartsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["http://127.0.0.1:8000"]
      }
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor,
      multi: true
    },
    {
      provide: NgChartsConfiguration,
      useValue: { generateColors: false }
    },
    BreadcumbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
