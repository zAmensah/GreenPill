import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthModule } from './customs/auth.module';
import { SystemModule } from './customs/system.module';
import { MaterialModule } from './customs/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthGuardService } from './services/auth-guard.service';
import { RestApiService } from './services/rest-api.service';
import { DataService } from './services/data.service';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    SystemModule,
    MaterialModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    MaterialModule,
    FormsModule,
  ],
  providers: [AuthGuardService, RestApiService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
