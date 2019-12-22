import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthModule } from './customs/auth.module';
import { MaterialModule } from './customs/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthGuardService } from './services/auth-guard.service';
import { RestApiService } from './services/rest-api.service';
import { DataService } from './services/data.service';

import { MessagesComponent } from './messages/messages.component';




@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    MaterialModule,
    NgbModule
  ],
  exports: [
    MaterialModule,
    MessagesComponent,
  ],
  providers: [AuthGuardService, RestApiService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
