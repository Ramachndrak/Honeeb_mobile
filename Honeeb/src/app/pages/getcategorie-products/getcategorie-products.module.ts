import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetcategorieProductsPageRoutingModule } from './getcategorie-products-routing.module';

import { GetcategorieProductsPage } from './getcategorie-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetcategorieProductsPageRoutingModule
  ],
  declarations: [GetcategorieProductsPage]
})
export class GetcategorieProductsPageModule {}
