import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupwithmobilenoPageRoutingModule } from './signupwithmobileno-routing.module';

import { SignupwithmobilenoPage } from './signupwithmobileno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupwithmobilenoPageRoutingModule
  ],
  declarations: [SignupwithmobilenoPage]
})
export class SignupwithmobilenoPageModule {}
