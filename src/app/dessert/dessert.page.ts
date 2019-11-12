import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.page.html',
  styleUrls: ['./dessert.page.scss'],
})
export class DessertPage implements OnInit {
  cart = [];
  items = [];
  sliderConfig = {
    slidesPerView: 2,
    centeredSlides: false
  };


  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit() {
    this.items = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    
  }
  
  addToCart(product) {
    this.cartService.addProduct(product);
  }

}
