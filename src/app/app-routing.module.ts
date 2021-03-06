import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  // { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  // { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
  // { path: 'tab3', loadChildren: './tab3/tab3.module#Tab3PageModule' },
  // { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },

  // { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },

  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },

  // { path: 'main-dishes', loadChildren: './main-dishes/main-dishes.module#MainDishesPageModule' },
  // { path: 'dessert', loadChildren: './dessert/dessert.module#DessertPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
