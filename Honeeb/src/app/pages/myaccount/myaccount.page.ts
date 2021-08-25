import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.page.html',
  styleUrls: ['./myaccount.page.scss'],
})
export class MyaccountPage implements OnInit {
  recentOrders:any = [{}]
  wishlist:any = [{}]
  constructor() { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.recentOrders = [{
      "Id":"HNB 1234",
      "date":"05 May, 2020 10:10 AM",
      "image":"",
      "name":"saakaa women's top",
      "price":"2160",
      "delivery_at_present":"Transit",

    }]
    this.wishlist = [{
      "Id":"HNB 1234",
      "date":"05 May, 2020 10:10 AM",
      "image":"",
      "name":"saakaa women's top",
      "price":"180",
      "original_price":"360",
      "delivery_at_present":"Transit",

    }]
  }

}
