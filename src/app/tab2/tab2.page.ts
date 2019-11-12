import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  public searchTerm: string = "";
  public card: any;
  cart = [];

  constructor(private dataService: ServicesService , private cartService: CartService ) {}


  ngOnInit() {
    this.setFilteredItems();
    this.cart = this.cartService.getCart();

  }
  setFilteredItems() {
    this.card = this.dataService.filterItems(this.searchTerm);
  }
  addToCart(p) {
  
    this.cartService.addProduct(p);
  }
}

