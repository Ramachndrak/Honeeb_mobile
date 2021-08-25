import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WoocommerceProvider } from 'src/providers/woocommerce/woocommerce';
import { UtilsProvider } from 'src/utils/utils';
import { LoadingControllerProvider } from 'src/loading-controller/loading-controller';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    WoocommerceProvider,
    UtilsProvider,
    LoadingControllerProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
