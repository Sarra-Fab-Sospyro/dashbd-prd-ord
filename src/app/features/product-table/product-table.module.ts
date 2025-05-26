import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductTableRoutingModule } from './product-table-routing.module';
import { ProductTableComponent } from './product-table.component';


@NgModule({
  declarations: [
    ProductTableComponent
  ],
  imports: [
    CommonModule,
    ProductTableRoutingModule
  ]
})
export class ProductTableModule { }
