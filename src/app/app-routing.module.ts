import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppItemsCatalogComponent } from './ItemsCatalog/app-items-catalog.component';
import { AppItemDetailsComponent } from './ItemDetails/app-item-details.component';
import { AppAccessoriesComponent } from './AccessoriesCatalog/app-accessories.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'catalog/accessories',
    pathMatch: 'full'
  },
  {
    path: 'catalog',
    children: [
      {
        path: 'accessories',
        children: [
          {
            path: '',
            component: AppAccessoriesComponent,
            pathMatch: 'full'
          },
          {
            path: ':id/items',
            children: [
              {
                path: '',
                component: AppItemsCatalogComponent,
                pathMatch: 'full'
              },
              {
                path: ':id',
                component: AppItemDetailsComponent,
                pathMatch: 'full'
              }
            ]
          },
        ]
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'catalog/accessories',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
