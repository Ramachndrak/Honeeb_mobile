import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupwithmobilenoPage } from './signupwithmobileno.page';

const routes: Routes = [
  {
    path: '',
    component: SignupwithmobilenoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupwithmobilenoPageRoutingModule {}
