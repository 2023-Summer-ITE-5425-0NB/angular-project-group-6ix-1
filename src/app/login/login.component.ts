import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl, } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  signInForm= new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  onSubmit() {
    if (this.signInForm.invalid) {
      return;
    }

    const formData = this.signInForm.value;
    this.http.post('http://localhost:6006/auth/login', formData).subscribe(
      (response) => {
        // Handle successful login response (e.g., store token, navigate to another page, etc.)
        console.log('Login successful:', response);
      },
      (error) => {
        // Handle login error (e.g., show error message to the user)
        console.error('Login error:', error);
      }
    );
  }

}
