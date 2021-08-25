
import { Injectable } from '@angular/core';
import { LoadingController, AlertController, ToastController, Platform } from '@ionic/angular';

@Injectable()
export class LoadingControllerProvider {
  loading: any;
  constructor(private toastCtrl:ToastController,public loadingCtrl: LoadingController, public alertControler: AlertController,
    public platform: Platform) { }
    async showLoading(loadingId: string, loadingMessage: string = 'Loading...') {
      const loading = await this.loadingCtrl.create({
        id: loadingId,
        message: loadingMessage,
        spinner: 'circles'
      });
      return await loading.present();
  }
  
  async loadingDismiss() {
    this.loading = false;
    return await this.loadingCtrl.getTop().then(a => {
       if ( a )
        a.dismiss().then(() => console.log('loading dismissed'));
    });

}
  
}

