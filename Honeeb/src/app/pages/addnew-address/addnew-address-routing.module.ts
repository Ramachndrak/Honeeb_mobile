import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddnewAddressPage } from './addnew-address.page';

const routes: Routes = [
  {
    path: '',
    component: AddnewAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddnewAddressPageRoutingModule {}
