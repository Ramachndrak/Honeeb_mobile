import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllCategoriePage } from './view-all-categorie.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAllCategoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAllCategoriePageRoutingModule {}
