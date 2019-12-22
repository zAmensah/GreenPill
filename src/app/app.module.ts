import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthGuardService } from './services/auth-guard.service';
import { RestApiService } from './services/rest-api.service';
import { DataService } from './services/data.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [AuthGuardService, RestApiService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
