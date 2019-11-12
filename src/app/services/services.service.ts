import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  public card: any = [];

  constructor() {
    this.card = [
      {
        "id":1,
        "title": "Macaroni & Cheese with Garlic Shrimp",
        "src": "../assets/images/n.jpg",
        "price":64.99,
      },
      {
        "id":2,
        "title": "Breakfast",
        "src": "../assets/images/28872922_2169150856662276_6056431240624472064_n.jpg",
        "price":55.99,
  
      },
      {
        "id":3,
        "title": "Cannelloni Chicken Mozzarella",
        "src": "../assets/images/20900952_2030374803873216_2886305870509764287_o.jpg",
        "price":65.99,
      },

      {
        "id":4,
        "title": "Shrimp",
        "src": "../assets/images/22095949_2054436228133740_4203200918901956003_o.jpg",
        "price":70.99,
  
      },
      {
        "id":5,
        "title": "Molten Cake",
        "src": "../assets/images/20626678_2024305851146778_2639216531100947243_o.png",
        "price":64.99,
      },
      {
        "id":6,
        "title": "Chocolate Jar",
        "src": "../assets/images/21083356_2035683603342336_2451225797233004230_o.jpg",
        "price":55.99,
  
      },
      {
        "id":7,
        "title": "crepe nutella",
        "src": "../assets/images/21316237_2040748356169194_1326372586170416056_o.jpg",
        "price":70.99,
  
      },
      {
        "id":8,
        "title": "Cheese Oreo",
        "src": "../assets/images/32294014_2214985442078817_3024662200594726912_o.jpg",
        "price":65.99,
  
      }
    ];
  }

  filterItems(searchTerm) {
    return this.card.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }


}
