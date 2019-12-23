import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { PatientsListComponent } from '../components/patients-list/patients-list.component';



const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'patients', component: PatientsListComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
