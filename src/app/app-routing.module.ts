import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import {UploadVisualizeComponent} from './upload-visualize.component';
import {UploadCompareComponent} from './upload-compare.component';
import {DialPadComponent} from './dial-pad-component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'visualize',
    component: UploadVisualizeComponent
  },
  {
    path: 'compare',
    component: UploadCompareComponent
  },
  {
    path: 'dialpadder',
    component: DialPadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

