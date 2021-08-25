import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperhoneyPageRoutingModule } from './superhoney-routing.module';

import { SuperhoneyPage } from './superhoney.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperhoneyPageRoutingModule
  ],
  declarations: [SuperhoneyPage]
})
export class SuperhoneyPageModule {}
