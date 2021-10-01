import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltersandSortPageRoutingModule } from './filtersand-sort-routing.module';

import { FiltersandSortPage } from './filtersand-sort.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiltersandSortPageRoutingModule
  ],
  declarations: [FiltersandSortPage]
})
export class FiltersandSortPageModule {}
