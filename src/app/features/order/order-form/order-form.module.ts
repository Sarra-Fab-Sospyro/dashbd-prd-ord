import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderFormRoutingModule } from './order-form-routing.module';
import { OrderFormComponent } from './order-form.component';


@NgModule({
  declarations: [
    OrderFormComponent
  ],
  imports: [
    CommonModule,
    OrderFormRoutingModule
  ]
})
export class OrderFormModule { }
