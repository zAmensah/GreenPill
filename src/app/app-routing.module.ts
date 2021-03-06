import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemComponent } from './components/system/system.component';


const routes: Routes = [
  { path: '', component: SystemComponent, loadChildren: './customs/system.module#SystemModule'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
