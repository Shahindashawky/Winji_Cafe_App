import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-main-dishes',
  templateUrl: './main-dishes.page.html',
  styleUrls: ['./main-dishes.page.scss'],
})
export class MainDishesPage implements OnInit {
  
  cart = [];
   items=[];
 
   sliderConfig = {
    slidesPerView: 2,
    centeredSlides: false
     };



constructor(private router: Router, private cartService: CartService ,public navCtrl:NavController) { }


ngOnInit() {
  this.items = this.cartService.getProducts();
  this.cart = this.cartService.getCart();
}

addToCart(product) {
  this.cartService.addProduct(product);
}


}