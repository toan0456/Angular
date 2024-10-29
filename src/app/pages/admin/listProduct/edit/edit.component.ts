import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  productForm: any;

  constructor( 
    private formBuider: FormBuilder,
    private productService: ProductService,
    private activeRoute: ActivatedRoute
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

  ngOnInit(){
    const id = this.activeRoute.snapshot.params['id']
    // console.log(id)
    this.productService.getProductsById(id).subscribe( data => {
      // console.log(data)
      this.productForm.patchValue(data)
    })
  }

  handleSubmit(){
    if (this.productForm.invalid) {
      return
    }
    const id = this.activeRoute.snapshot.params['id']
    // console.log({...this.productForm.value, id})
    this.productService.updateProduct({...this.productForm.value, id}).subscribe(data =>{
      console.log(data)
    } )
  }

}
