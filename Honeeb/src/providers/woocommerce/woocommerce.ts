import { Injectable } from '@angular/core';
import * as WC from 'woocommerce-api';

@Injectable()
export class WoocommerceProvider {

  WooCommerce: any;

  constructor() {
    this.WooCommerce = WC({
      url: "http://honeebi.com",
      consumerKey: "ck_2362fa85a43bd64963b3b3f452cb739e0771d997",
      consumerSecret: "cs_16a4365958209ad544b7292ba2011f0255530f78",
      wpAPI: true,
      version: 'wc/v1'
    });
  }

  init(){
    return this.WooCommerce;
  }

}
