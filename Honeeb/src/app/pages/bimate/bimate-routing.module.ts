import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BimatePage } from './bimate.page';

const routes: Routes = [
  {
    path: '',
    component: BimatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BimatePageRoutingModule {}
