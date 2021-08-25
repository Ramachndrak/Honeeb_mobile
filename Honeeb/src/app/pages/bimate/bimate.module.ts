import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BimatePageRoutingModule } from './bimate-routing.module';

import { BimatePage } from './bimate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BimatePageRoutingModule
  ],
  declarations: [BimatePage]
})
export class BimatePageModule {}
