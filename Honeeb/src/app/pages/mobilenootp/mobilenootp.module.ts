import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobilenootpPageRoutingModule } from './mobilenootp-routing.module';

import { MobilenootpPage } from './mobilenootp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MobilenootpPageRoutingModule
  ],
  declarations: [MobilenootpPage]
})
export class MobilenootpPageModule {}
