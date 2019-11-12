import { DessertPage } from './../dessert/dessert.page';
import { MainDishesPage } from './../main-dishes/main-dishes.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/tabs/main-dishes',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'tabs',
        loadChildren: 'src/app/tabs/tabs.module#TabsPageModule'
      },
      
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage],

})
export class MenuPageModule {

}
