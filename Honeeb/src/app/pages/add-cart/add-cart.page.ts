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
   cart = [];
  removeTrash = false
  cartItemCount = 0;
  subtotal = 0
  itemsInCart = [];
  constructor(private cartService:CartServiceService,private router:Router) { }

  ngOnInit() {
    this.getCart();
   // this.cartItemCount = this.cartService.getCartItemCount();
  }
  getCart()
  {
    console.log("cart items",localStorage.getItem("cart"))
    this.cart = JSON.parse(localStorage.getItem("cart")) //this.cartService.getCart()
    this.itemsInCart = this.cart
    this.cartItemCount = this.cart.length;
    console.log("cart items",this.cart)
    this.cart.forEach((res) => {
      this.subtotal =  this.subtotal+(res.price * res.quantityInCart)
      });
    
  }
  removeCart()
  {
    this.removeTrash = true
  }
  deleteProduct(product:any)
  {
    this.cartService.removeProduct(product);
  }
  checkoutTapped()
  {
    this.router.navigate(["./checkout",{"categories_all":""}]) 
  
  }
  decreaseCartItem(product,index) {
    product.quantityInCart -= 1;
    var p = this.itemsInCart[index]
    p.quantityInCart =  product.quantityInCart 
     this.cartService.addProduct(product);
    localStorage.setItem('cart', JSON.stringify(this.itemsInCart));
    this.subtotal = this.subtotal - p.price
  //   this.subtotal = 0
  //   this.cart = JSON.parse(localStorage.getItem("cart")) //this.cartService.getCart()
  //   this.itemsInCart = this.cart
  //  this.cart.forEach((res) => {
  //     this.subtotal =  this.subtotal+(res.price * res.quantityInCart)
  //     });
  }
 
  increaseCartItem(product,index) {
    product.quantityInCart += 1;
    var p = this.itemsInCart[index]
    p.quantityInCart =  product.quantityInCart 
     this.cartService.addProduct(product);
    localStorage.setItem('cart', JSON.stringify(this.itemsInCart));
    this.subtotal = this.subtotal + p.price
    // this.cart = JSON.parse(localStorage.getItem("cart")) //this.cartService.getCart()
    // this.itemsInCart = this.cart
    // this.cart.forEach((res) => {
    //    this.subtotal =  this.subtotal+(res.price * res.quantityInCart)
    //    });
  }
  cancel()
  {
    this.removeTrash = false
  }
  emptyCart()
  {

  }
}
