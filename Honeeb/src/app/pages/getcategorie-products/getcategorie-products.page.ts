import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingControllerProvider } from 'src/loading-controller/loading-controller';
import { WoocommerceProvider } from 'src/providers/woocommerce/woocommerce';
import { UtilsProvider } from 'src/utils/utils';
import { BehaviorSubject } from 'rxjs';
import { CartServiceService } from '../cart-service.service';
import { FiltersandSortPage } from '../filtersand-sort/filtersand-sort.page';
import { ModalController} from '@ionic/angular';
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
  itemsInCart = [];
  products = [];
  cartItemCount = 0;
  selectedIndex = 0;
  rate: any;
  added = false;
  constructor(private activatedroute: ActivatedRoute,private WP: WoocommerceProvider, private utls: UtilsProvider,
    private loader: LoadingControllerProvider,private router:Router,private popoverCtrl :ModalController,
    private zone: NgZone,private cartService:CartServiceService) { 
      this.WooCommerce = WP.init();
    this.category_product = JSON.parse(this.activatedroute.snapshot.paramMap.get('getcategorie_product'));
  }
  
  ngOnInit() {
    var tempProducts = JSON.parse(localStorage.getItem("cart"))
    if(tempProducts != undefined)
    {
      tempProducts.forEach((res) => {
        let index: number = tempProducts.indexOf(res);
       if(res.quantityInCart == 0) 
       {
        if(index > -1){
          tempProducts .splice(index, 1);
      }
       // tempProducts = tempProducts.splice(index)
       }
        //your each object will be in res
        //example: let value = res
     });
      this.cart = tempProducts
      this.itemsInCart = this.cart
      this.cartItemCount = this.cart.length;
    }
    localStorage.setItem('cart', JSON.stringify(this.itemsInCart));
    // this.cart = this.cartService.getCart();
    // this.cartItemCount = this.cartService.getCartItemCount();
    
  }
  ionViewWillEnter()
  {
    // if(this.cart != undefined)
    // {
      
    // }
    // else{
   this.getspecificProduct();
    // }
   
  }

  getspecificProduct()
  {
    console.log("product id ",this.category_product.id)
    this.loader.showLoading('ifOfLoading')
    this.WooCommerce.getAsync("products?category="+this.category_product.id).then((data) => {
      
      this.zone.run(() => {
        this.getproducts_category = JSON.parse(data.body);

          this.getproducts_category.forEach((res) => {
          res["quantityInCart"] = 0
          //your each object will be in res
          //example: let value = res
       });
        


       var tempProducts = JSON.parse(localStorage.getItem("cart"))
        if(tempProducts != undefined)
        {
          tempProducts.forEach((res1) => {
            this.getproducts_category.forEach((res2) => {
              if(res1.id == res2.id)
              {
                res2["quantityInCart"] = res1["quantityInCart"]
              }
              // else
              // {
              //   res2["quantityInCart"] = 0
              // }
              //your each object will be in res
              //example: let value = res
           });
         });
        }
        
        // else
        // {
      //       this.getproducts_category.forEach((res) => {
      //     res["quantityInCart"] = 0
      //     //your each object will be in res
      //     //example: let value = res
      //  });
        // }

       

      //   this.getproducts_category.forEach((res) => {
      //     res["quantityInCart"] = 0
      //     //your each object will be in res
      //     //example: let value = res
      //  });
      
        this.cartService.getProducts(JSON.parse(data.body));
        this.onRate(2)
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
  addToCart(product,index) {
   
    this.selectedIndex = index
    // this.cartItemCount = this.cartService.getCartItemCount();
    console.log("cart count", this.cartItemCount )
    console.log("cart product", this.cart )
    var tempProducts = JSON.parse(localStorage.getItem("cart"))
    if(tempProducts != undefined)
    {
      this.cart = tempProducts
      this.itemsInCart = this.cart
     
    }
    
    product.quantityInCart += 1;
    
    this.itemsInCart.push(product);
    this.cartItemCount = this.cart.length;
    // this.getproducts_category.forEach((res) => {
    //   if(res.id == product.id)
    //   {
    //     this.itemsInCart.splice(res)
    //     this.itemsInCart.push(product); 
    //   }
    //   else
    //   {
    //     this.itemsInCart.push(product); 
    //   }
    // });
   
    localStorage.setItem('cart', JSON.stringify(this.itemsInCart));
    // this.cartService.addProduct(product);
  }
  decreaseCartItem(product,index) {
    product.quantityInCart -= 1;
   var p = this.itemsInCart[index]
   p.quantityInCart =  product.quantityInCart 
    // this.getproducts_category.forEach((res) => {
    //   if(res.id == product.id)
    //   {
    //     this.itemsInCart.splice(res)
    //   }
    // });
    // this.itemsInCart.push(product); 
    // localStorage.setItem('cart', JSON.stringify(this.itemsInCart));
    // this.cartService.decreaseProduct(product);
    this.itemsInCart.forEach((res) => {
      let index: number = this.itemsInCart.indexOf(res);
      if(res.quantityInCart == 0) 
      {
        {
          if(index > -1){
            this.itemsInCart .splice(index, 1);
        }
      }
    }});
    this.cartItemCount = this.cart.length;
    localStorage.setItem('cart', JSON.stringify(this.itemsInCart));
  }
 
  increaseCartItem(product,index) {
    product.quantityInCart += 1;
    // this.getproducts_category.forEach((res) => {
    //   if(res.id == product.id)
    //   {
    //     this.itemsInCart.splice(res)
    //   }
    // });
    //this.itemsInCart.push(product); 
   
    var p = this.itemsInCart[index]
   p.quantityInCart =  product.quantityInCart 
    // this.cartService.addProduct(product);
    this.itemsInCart.forEach((res) => {
      if(res.quantityInCart == 0) 
      {
        this.itemsInCart.splice(res)
      }
    });
   localStorage.setItem('cart', JSON.stringify(this.itemsInCart));
  }
  openCart()
  {
    this.router.navigate(["./add-cart"]); 
  }
  async filtersTapped()
  {
// lowest price  http://honeebi.com/wp-json/wc/v3/products?category=27&orderby=price&order=asc

// higest price  http://honeebi.com/wp-json/wc/v3/products?category=27&orderby=price&order=desc

// min and max price http://honeebi.com/wp-json/wc/v3/products?category=27&min_price=120&max_price=300

const popover = await this.popoverCtrl.create({
  component: FiltersandSortPage,
  componentProps: {type:'filters'},
  
  
  });
  popover.onDidDismiss().then(result =>
   {
     
     
   })
  return await popover.present();


  }
 async sortTapped()
  {
    const popover = await this.popoverCtrl.create({
      component: FiltersandSortPage,
      componentProps: {type:'sort'},
      
      });
      popover.onDidDismiss().then(result =>
       {
         
         
       })
      return await popover.present();
  }
  productDetails(productData:any)
  {
    this.router.navigate(["./productdetail",{"productdata":JSON.stringify(productData)}]); 
  }
}
