import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderTableRoutingModule } from './order-table-routing.module';
import { OrderTableComponent } from './order-table.component';


@NgModule({
  declarations: [
    OrderTableComponent
  ],
  imports: [
    CommonModule,
    OrderTableRoutingModule
  ]
})
export class OrderTableModule { }
