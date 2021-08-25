import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAllCategoriePageRoutingModule } from './view-all-categorie-routing.module';

import { ViewAllCategoriePage } from './view-all-categorie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAllCategoriePageRoutingModule
  ],
  declarations: [ViewAllCategoriePage]
})
export class ViewAllCategoriePageModule {}
