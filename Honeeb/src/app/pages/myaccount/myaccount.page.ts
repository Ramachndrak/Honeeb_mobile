import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.page.html',
  styleUrls: ['./myaccount.page.scss'],
})
export class MyaccountPage implements OnInit {
  recentOrders:any = [{}]
  wishlist:any = [{}]
  loggedIn_userdata: any;
  isLoggedIn: string;
  userName :string = ""
  email :string = ""
  constructor() {
     this.isLoggedIn = localStorage.getItem('isLoggedIn');
     if(this.isLoggedIn == 'true')
     {
      this.loggedIn_userdata = JSON.parse(localStorage.getItem("loginData"));
      this.userName = this.loggedIn_userdata.user_login
      this.email = this.loggedIn_userdata.user_email
     }
   
   }

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
  completeprofile()
  {

  }
  logout()
  {

  }
}
