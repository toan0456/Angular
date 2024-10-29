import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  productForm: any;

  constructor( 
    private formBuider: FormBuilder,
    private productService: ProductService
  ){
    this.productForm = this.formBuider.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      description: [''],
      imageUrl: [''],
      available: ["true"],
      type: ['type1'],
    })
  }

  handleSubmit(){
    if (this.productForm.invalid) {
      return
    }
    console.log(this.productForm.value)
    this.productService.addProduct(this.productForm.value).subscribe(data =>{
      console.log(data)
    } )
  }

}
