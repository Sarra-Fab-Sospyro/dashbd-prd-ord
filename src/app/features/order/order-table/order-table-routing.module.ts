import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderTableComponent } from './order-table.component';

const routes: Routes = [{ path: '', component: OrderTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderTableRoutingModule { }
