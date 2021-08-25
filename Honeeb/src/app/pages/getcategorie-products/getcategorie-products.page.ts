import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingControllerProvider } from 'src/loading-controller/loading-controller';
import { WoocommerceProvider } from 'src/providers/woocommerce/woocommerce';
import { UtilsProvider } from 'src/utils/utils';
import { BehaviorSubject } from 'rxjs';
import { CartServiceService } from '../cart-service.service';
@Component({
  selector: 'app-getcategorie-products',
  templateUrl: './getcategorie-products.page.html',
  styleUrls: ['./getcategorie-products.page.scss'],
})
export class GetcategorieProductsPage implements OnInit {
  category_product: any;
  WooCommerce: any;
  getproducts_category: any = [];
  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;
  rate: any;
  constructor(private activatedroute: ActivatedRoute,private WP: WoocommerceProvider, private utls: UtilsProvider,
    private loader: LoadingControllerProvider,private router:Router,
    private zone: NgZone,private cartService:CartServiceService) { 
      this.WooCommerce = WP.init();
    this.category_product = JSON.parse(this.activatedroute.snapshot.paramMap.get('getcategorie_product'));
  }
  
  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }
  ionViewWillEnter()
  {
   this.getspecificProduct();
  }

  getspecificProduct()
  {
    console.log("product id ",this.category_product.id)
    this.loader.showLoading('ifOfLoading')
    this.WooCommerce.getAsync("products/"+this.category_product.id).then((data) => {
      
      this.zone.run(() => {
        this.getproducts_category = JSON.parse(data.body);
        this.cartService.getProducts(JSON.parse(data.body));
        this.onRate(this.getproducts_category.average_rating)
    });

      console.log("getspecificProduct",this.getproducts_category);
      this.loader.loadingDismiss()
     
      }, (err) => {
      console.log(err);
      })
    //id
   

  }
  onRate(rate) {
    this.rate = rate;
  }
  addToCart(product) {
    this.cartService.addProduct(product);
  }
  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }
 
  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }
  openCart()
  {
    this.router.navigate(["./add-cart"]); 
  }
  filtersTapped()
  {

  }
  sortTapped()
  {
    
  }
}
