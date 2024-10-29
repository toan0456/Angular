import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signupForm!: any;

  constructor(
    private authService: AuthService,
    private formbuider: FormBuilder,
    private router: Router
  ){
    this.signupForm = this.formbuider.group({
      username: [''],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  handleSubmit(){
    if(this.signupForm.invalid) return;
    this.authService.signup(this.signupForm.value).subscribe(()=> {
      alert("Đăng ký thành công")
      this.router.navigateByUrl(`/signin`)
    })
  }
}
