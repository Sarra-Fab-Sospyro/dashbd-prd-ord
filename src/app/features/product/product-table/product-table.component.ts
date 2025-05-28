import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { debounceTime, Observable, tap } from 'rxjs';
import { IProduct } from '../../models/iproduct';
import { Router } from '@angular/router';
import { LoadingService } from '../../../core/services/loading.service';
import { SpinnerComponent } from '../../../core/spinner/spinner.component';

@Component({
  selector: 'cem-product-table',
  standalone: false,
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.scss',
})
export class ProductTableComponent implements OnInit {

  loadingService = inject(LoadingService);
  
  protected products$: Observable<IProduct[]>;
  protected products: IProduct[];
  private _productService = inject(ProductService);

  private _router = inject(Router);

  constructor() {
    this.products$ = new Observable();
  }

  ngOnInit(): void {
    this.products$ = this._productService.getAllProducts().pipe(
      tap(prod=> console.log(prod))
    )
  }

  onDeleteProduct(id: number) {
    this._productService.deleteProduct(id);
  }

  toBackHomePage() {
    this._router.navigate(['/home']);
  }

}
