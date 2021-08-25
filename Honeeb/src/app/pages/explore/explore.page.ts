import { Component, OnInit, NgZone } from '@angular/core';
import * as WC from 'woocommerce-api';
import { WoocommerceProvider } from 'src/providers/woocommerce/woocommerce';
import { UtilsProvider } from 'src/utils/utils';
import { LoadingController } from '@ionic/angular';
import { LoadingControllerProvider } from 'src/loading-controller/loading-controller';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
  filters: any;
  todayDeals: any;
  WooCommerce: any;
  products_category: any = [];

  slideOpts = {
    slidesPerView: 4,
    spaceBetween: 10,
};
 

  constructor(private WP: WoocommerceProvider, private utls: UtilsProvider,
     private loader: LoadingControllerProvider,private router:Router,
     private zone: NgZone) {
    this.WooCommerce = WP.init();
  //   this.filters= [{"url":"../assets/kid.jpg","name":"Fashion"},{"url":"../assets/kid.jpg","name":"Mobile"},{"url":"../assets/kid.jpg","name":"Fashion"},{"url":"../assets/kid.jpg","name":"Mobile"}
  // ,{"url":"../assets/kid.jpg","name":"Fashion"},{"url":"../assets/kid.jpg","name":"Mobile"}]

  // this.todayDeals= [{"url":"../assets/discount.jpg","name":"Fashion"},{"url":"../assets/discount.jpg","name":"Mobile"},{"url":"../assets/discount.jpg","name":"Electronics"},{"url":"../assets/discount.jpg","name":"Sports"}
  //  ,{"url":"../assets/discount.jpg","name":"Shoes"},{"url":"../assets/discount.jpg","name":"Watches"}]
    }
   
    ionViewWillEnter()
   {
    this.getAllCategoriesAPI();
   }

   //* Get All Categories
   getAllCategoriesAPI()
   {
     
       this.loader.showLoading('ifOfLoading')
    this.WooCommerce.getAsync("products").then((data) => {
      
      this.zone.run(() => {
        this.products_category = JSON.parse(data.body);
    });

      console.log("list of products",this.products_category);
      this.loader.loadingDismiss()
     
      }, (err) => {
      console.log(err);
      })
    
   }
   

  ngOnInit() {
  }
  viewallCategories()
  {
    this.router.navigate(["./view-all-categorie",{"categories_all":JSON.stringify(this.products_category)}])
  }
  getCategorieProduct(pcategory:any)
  {
    this.router.navigate(["./getcategorie-products",{"getcategorie_product":JSON.stringify(pcategory)}])
  }
  
}
