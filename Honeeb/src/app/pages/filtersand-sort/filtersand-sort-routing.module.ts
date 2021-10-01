import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiltersandSortPage } from './filtersand-sort.page';

const routes: Routes = [
  {
    path: '',
    component: FiltersandSortPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiltersandSortPageRoutingModule {}
