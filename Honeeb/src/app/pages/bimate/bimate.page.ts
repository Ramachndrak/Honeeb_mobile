import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bimate',
  templateUrl: './bimate.page.html',
  styleUrls: ['./bimate.page.scss'],
})
export class BimatePage implements OnInit {

  productDetails:any = [{}]
  constructor() { }

  ngOnInit() {
  }
  ionViewWillEnter()
  {
    this.productDetails = [{
      "name" : "saakaa women's top",
      "reached": "100 people bought this product",
      "price" : "180.00",
      "header":"Why you people bought this product",
      "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }]
  }

}
