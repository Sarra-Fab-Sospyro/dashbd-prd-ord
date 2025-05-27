import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { NotFoundPageComponent } from './core/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'orderForm',
    loadChildren: () => import('./features/order/order-form/order-form.module').then(m => m.OrderFormModule)
  },
  {
    path: 'orderTable',
    loadChildren: () => import('./features/order/order-table/order-table.module').then(m => m.OrderTableModule)
  },
  {
    path: 'productForm',
    loadChildren: () => import('./features/product/product-form/product-form.module').then(m => m.ProductFormModule)
  },
  {
    path: 'productTable',
    loadChildren: () => import('./features/product/product-table/product-table.module').then(m => m.ProductTableModule)
  },
  {
    path: 'NOT-FOUND',
    component: NotFoundPageComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'NOT-FOUND'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
