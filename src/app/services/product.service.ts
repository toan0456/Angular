import { HttpClient } from '@angular/common/http';
import { IProducts } from './../interface/IProducts';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API: string = "http://localhost:3000/products";
  constructor( private http: HttpClient) { }

  getProducts(): Observable<IProducts[]>{
    return this.http.get<IProducts[]>(this.API)
  }

  getProductsById(id: number| string): Observable<IProducts>{
    return this.http.get<IProducts>(`${this.API}/${id}`)
  }

  addProduct(product: IProducts): Observable<IProducts>{
    return this.http.post<IProducts>(this.API, product)
  }

  updateProduct(product: IProducts):Observable<IProducts>{
    return this.http.put<IProducts>(`${this.API}/${product.id}`, product)
  }

  deleteProduct(id: number| string):Observable<IProducts>{
    return this.http.delete<any>(`${this.API}/${id}`)
  }
}
