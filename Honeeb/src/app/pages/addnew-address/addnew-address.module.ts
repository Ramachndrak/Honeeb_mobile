import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddnewAddressPageRoutingModule } from './addnew-address-routing.module';

import { AddnewAddressPage } from './addnew-address.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddnewAddressPageRoutingModule
  ],
  declarations: [AddnewAddressPage]
})
export class AddnewAddressPageModule {}
