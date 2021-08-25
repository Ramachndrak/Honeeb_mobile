import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.page.html',
  styleUrls: ['./add-cart.page.scss'],
})
export class AddCartPage implements OnInit {
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
  constructor(private cartService:CartServiceService,private router:Router) { }

  ngOnInit() {
    this.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }
  getCart()
  {
    this.cart = this.cartService.getCart()
    console.log("cart items",this.cart)
  }
  removeCart()
  {
    
  }
  deleteProduct()
  {
    
  }
  checkoutTapped()
  {
    this.router.navigate(["./checkout",{"categories_all":""}]) 
  
  }
  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }
 
  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }
}
