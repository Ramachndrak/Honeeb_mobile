import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobilenootpPage } from './mobilenootp.page';

const routes: Routes = [
  {
    path: '',
    component: MobilenootpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobilenootpPageRoutingModule {}
