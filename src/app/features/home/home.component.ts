import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cem-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private _router = inject(Router);





//Method 
  toCreateProduct() {
    this._router.navigate(['/productForm'])
  }

  toCheckProducts() {
    this._router.navigate(['/productTable']);
  }

  toCreateOrder() {
    this._router.navigate(['/orderForm'])
  }
  toCheckOrders() {
    this._router.navigate(['/orderTable']);
  }
}
