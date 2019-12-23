import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { MaterialModule } from './material.module';
import { AvatarModule } from 'ngx-avatar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MessagesComponent } from '../messages/messages.component';
import { SystemComponent } from '../components/system/system.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { PatientsListComponent } from '../components/patients-list/patients-list.component';




@NgModule({
  declarations: [
    MessagesComponent,
    SystemComponent,
    DashboardComponent,
    PatientsListComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    MaterialModule,
    AvatarModule,
    NgbModule
  ]
})
export class SystemModule { }
