import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  signinForm!: any;

  constructor(
    private AuthService: AuthService,
    private router: Router,
    private formBuider: FormBuilder
  ){
    this.signinForm = this.formBuider.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  handleSubmit(){
    if(this.signinForm.invalid) return;
    this.AuthService.signin(this.signinForm.value).subscribe((data)=> {
      alert("Đăng nhập thành công")
      localStorage.setItem("user", JSON.stringify(data))

    })
  }

}
