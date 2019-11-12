import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  selectedItems = [];
  total = 0;

  products = [];

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.getOrders();
  }

  removePost(item) {
    let index = this.selectedItems.indexOf(item);

    if (index > -1) {
      this.cartService.removeProduct(index);
      this.getOrders();
    }
  }

  getOrders(){
    const items = this.cartService.getCart();
    const selected = {};
    for (const obj of items) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = { ...obj, count: 1 };
      }
    }
    this.selectedItems = Object.keys(selected).map(key => selected[key])

    // this.products = this.cartService.getCart();
    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);
  }


}