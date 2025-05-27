import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Observable, tap } from 'rxjs';
import { IProduct } from '../../models/iproduct';
import { Router } from '@angular/router';

@Component({
  selector: 'cem-product-table',
  standalone: false,
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.scss'
})
export class ProductTableComponent implements OnInit {

  protected products$: Observable<IProduct[]>;
  private _productService = inject(ProductService);
  
  private _router = inject(Router);

  constructor() {
    this.products$ = new Observable();
  }

  ngOnInit(): void {
    this.products$ = this._productService.getAllProducts().pipe(
      tap(product => console.log(product)))
  }

  onDeleteProduct(id:number){
    this._productService.deleteProduct(id);
  }

  toBackHomePage(){
    this._router.navigate(['/home']);
  }

}
