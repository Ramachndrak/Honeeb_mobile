import { Injectable } from '@angular/core';
import * as WC from 'woocommerce-api';

@Injectable()
export class WoocommerceProvider {

  WooCommerce: any;
  // apiLink: string = "http://honeebi.com/";
  // consumer_key: string  = "ck_2362fa85a43bd64963b3b3f452cb739e0771d997";
  // consumer_secret: string  = "cs_16a4365958209ad544b7292ba2011f0255530f78";

  constructor() {
    this.WooCommerce = new WC({
      url: "https://honeebi.com",
      consumerKey: "ck_2362fa85a43bd64963b3b3f452cb739e0771d997",
      consumerSecret: "cs_16a4365958209ad544b7292ba2011f0255530f78",
       wpAPI: true,
      version: 'wc/v2',
      queryStringAuth: true
    });
  }
  


  // getAPILink() : string{
  //   return this.apiLink;
  // }

  // getConsumerKey(): string{
  //   return this.consumer_key;
  // }

  // getConsumerSecret(): string{
  //   return this.consumer_secret;
  // }


  init(){
    return this.WooCommerce;
  }

}
