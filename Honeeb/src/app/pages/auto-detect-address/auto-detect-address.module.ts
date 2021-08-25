import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoDetectAddressPageRoutingModule } from './auto-detect-address-routing.module';

import { AutoDetectAddressPage } from './auto-detect-address.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoDetectAddressPageRoutingModule
  ],
  declarations: [AutoDetectAddressPage]
})
export class AutoDetectAddressPageModule {}
