import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/tabs/tab1',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      // {
      //   path: 'tab1',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () =>
      //         import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      //     }
      //   ]
      // },
      // {
      //   path: 'tab2',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () =>
      //         import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      //     }
      //   ]
      // },
      // {
      //   path: 'tab3',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () =>
      //         import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      //     }
      //   ]
      // },
      // {
      //   path: 'tab4',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () =>
      //         import('../tab4/tab4.module').then(m => m.Tab4PageModule)
      //     }
      //   ]
      // },
      // {
      //   path: 'main-dishes',
      //   loadChildren: '../main-dishes/main-dishes.module#MainDishesPageModule'
      // },
      // {
      // path: 'dessert',
      // loadChildren: '../dessert/dessert.module#DessertPageModule'
      //  },
      // {
      //   path: '',
      //   redirectTo: '/tabs/tab1',
      //   pathMatch: 'full'
      // }


      {
        path: 'dessert',
        loadChildren: 'src/app/dessert/dessert.module#DessertPageModule'
      },
      {
        path: 'main-dishes',
        loadChildren: 'src/app/main-dishes/main-dishes.module#MainDishesPageModule'
      },

      {
        path: 'tab1',
        loadChildren: 'src/app/tab1/tab1.module#Tab1PageModule'
      },
      {
        path: 'tab2',
        loadChildren: 'src/app/tab2/tab2.module#Tab2PageModule'
      },


      {
        path: 'tab4',
        loadChildren: 'src/app/tab4/tab4.module#Tab4PageModule'
      },


    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
