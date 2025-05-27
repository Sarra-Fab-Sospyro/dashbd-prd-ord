import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _http = inject(HttpClient);
  constructor() { }

  getAllProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>("/products");
  }

  addProduct(product: IProduct): Observable<IProduct> {
    return this._http.post<IProduct>('/products', product);
  }

  deleteProduct(id: number) {
    this._http.delete<IProduct>(`/products/${id}`);
  }


}
