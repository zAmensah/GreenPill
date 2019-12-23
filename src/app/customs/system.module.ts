import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { MaterialModule } from './material.module';
import { AvatarModule } from 'ngx-avatar';

import { MessagesComponent } from '../messages/messages.component';
import { SystemComponent } from '../components/system/system.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';




@NgModule({
  declarations: [
    MessagesComponent,
    SystemComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    MaterialModule,
    AvatarModule
  ]
})
export class SystemModule { }
