import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesComponent } from '../messages/messages.component';
import { SystemComponent } from '../components/system/system.component';



@NgModule({
  declarations: [
    MessagesComponent,
    SystemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SystemModule { }
