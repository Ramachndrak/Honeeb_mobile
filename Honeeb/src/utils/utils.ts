
import { Injectable } from '@angular/core';
import { LoadingController, AlertController, Platform} from '@ionic/angular';

import { BehaviorSubject } from 'rxjs';

/*
  Generated class for the UtilsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilsProvider {
  loading: any;
 
  

  constructor(
   
    public loadingControl: LoadingController,
    public alertControler: AlertController,
    public platform: Platform) { }

    async showLoader() {
      const loading = await this.loadingControl.create({
        message: 'Loading....',
      
      });
      await loading.present();
  
      const { role, data } = await loading.onDidDismiss();
  
      console.log('Loading dismissed!');
    }

  showLoaderWithTitle(msg: string) {
    this.loading = this.loadingControl.create({
      message: msg,
    });
    this.loading.present();
  }
  async dismissLoader() {
    
    await this.loading.dismiss()
    .then(()=>{
      this.loading = null;
    })
    .catch(e => console.log(e));
  }
  
}
