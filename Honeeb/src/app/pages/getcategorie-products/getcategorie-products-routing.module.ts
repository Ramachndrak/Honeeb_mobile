import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetcategorieProductsPage } from './getcategorie-products.page';

const routes: Routes = [
  {
    path: '',
    component: GetcategorieProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetcategorieProductsPageRoutingModule {}
