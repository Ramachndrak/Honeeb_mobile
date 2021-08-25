import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-superhoney',
  templateUrl: './superhoney.page.html',
  styleUrls: ['./superhoney.page.scss'],
})
export class SuperhoneyPage implements OnInit {
  details_of_about = [];
  transactionHistory: { type: string; cash_details: string; date: string; }[];
  isaboutClicked:boolean = true;
  isTransactionsClicked: boolean;
  constructor() { }

  ngOnInit() {
  }
  ionViewWillEnter()
  {
     this.details_of_about = [{
      "header": "How it works?",
      "terms": ["Shop on Honeybi & and Earn Super Honey", "Fill the honey cart & Be a super Extractor", "Enjoy Redemption & other Exclusive Benefits"]
    },
    {
      "header": "Exciting Membership Benefits?",
      "terms": ["Shop on Honeybi & and Earn Super Honey", "Fill the honey cart & Be a super Extractor", "Enjoy Redemption & other Exclusive Benefits"]
    }
    ]
    this.transactionHistory = [{
      "type" : "add",
      "cash_details" : "20ML / $20 super Honey Cash received for the order HNB 1234",
      "date":"30 jun, 2020 10:10 AM"
    },
    {
      "type" : "minus",
      "cash_details" : "20ML / $20 super Honey Cash used for the order HNB 1234",
      "date":"30 jun, 2020 10:20 AM"
    }
  ]
}
Transaction_history()
{
  this.isaboutClicked = false;
  this.isTransactionsClicked = true;
}
about()
{
  this.isaboutClicked = true;
  this.isTransactionsClicked = false;
}

}
