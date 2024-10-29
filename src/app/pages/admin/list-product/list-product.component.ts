import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { IProducts } from '../../../interface/IProducts';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css',
})
export class ListProductComponent {
  products!: IProducts[];

  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService
      .getProducts()
      .subscribe((data) => (this.products = data));
  }
  removeP(id: number | string) {
    const comfirm = window.confirm('Bạn có chắc muốn xóa không?');
    if (comfirm) {
      this.productService
        .deleteProduct(id)
        .subscribe(() => {
          alert('Xóa thành công');
          (this.products = this.products.filter((p) => p.id !== id))
        });
    }
  }
}
