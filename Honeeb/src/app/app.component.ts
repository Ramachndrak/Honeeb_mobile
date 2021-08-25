import { Component, NgZone } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoadingControllerProvider } from 'src/loading-controller/loading-controller';
import { WoocommerceProvider } from 'src/providers/woocommerce/woocommerce';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public selectedIndex = 0;
  /*public appPages = [
    {
      title: 'Fashion',
      url: '/tabnav/details',
    },
    {
      title: 'Mobiles',
      url: '/tabnav/details',
    },
    {
      title: 'Groceries',
      url: '/tabnav/details',
    },
    {
      title: 'Appliances',
      url: '/tabnav/details',
    },
    {
      title: 'Electronics',
      url: '/tabnav/details',
    },
    {
      title: 'Toys & Baby',
      url: '/tabnav/details',
    }
  ];*/
  public labels = ['Scan QR Code', 'My Profile', 'My wishlist', 'My orders', 'My offers'];
  
  products_category: any;
  WooCommerce: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loader: LoadingControllerProvider,
    private WP: WoocommerceProvider,
    private zone: NgZone
    
  ) {
    this.WooCommerce = WP.init();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });
  }

}
