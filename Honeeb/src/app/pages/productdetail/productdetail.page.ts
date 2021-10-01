import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.page.html',
  styleUrls: ['./productdetail.page.scss'],
})
export class ProductdetailPage implements OnInit {
  products_category: any;
  products_data: any;
  rate: any;
  segment: any;
  productsegment: any;
  sizeOptions = []
  colorOptions = []

  constructor(private activatedroute: ActivatedRoute) {
    this.segment = "size"
    this.productsegment = "description"
    this.products_data = JSON.parse(this.activatedroute.snapshot.paramMap.get('productdata'));
    if(this.products_data.attributes.length != 0)
    {
      this.products_data.attributes.forEach(item => {
        var index = this.products_data.attributes.indexOf(item)

        if(this.products_data.attributes[index].name == "Size")
      {
        this.sizeOptions = this.products_data.attributes[index].options;
      }
       else if(this.products_data.attributes[index].name == "color" || this.products_data.attributes[index].name == "Colour")
      {
        this.colorOptions = this.products_data.attributes[index].options;
      }

    //   if(this.products_data.attributes[0].name == "color" || this.products_data.attributes[0].name == "Colour")
    //   {
    //     this.colorOptions = this.products_data.attributes[0].options;
    //   }
    //  if(this.products_data.attributes[1].name == "color"  || this.products_data.attributes[1].name == "Colour")
    //   {
    //     this.colorOptions = this.products_data.attributes[1].options;
    //   }

      });
      
      
    }
    // if(this.products_data.attributes.length != 0)
    // {
    // this.colorOptions = this.products_data.attributes[0].options;
    // }
    console.log(this.products_data.name)
    console.log(this.products_data.price)
    console.log(this.products_data.images[0])
    this.onRate(this.products_data.average_rating)
   }

  ngOnInit() {
  }
  onRate(rate) {
    this.rate = rate;
  }
  segmentChanged(eve)
  {
    this.segment = eve.target.value
  }
  productsegmentChanged(eve)
  {
    this.productsegment = eve.target.value
  }
}
