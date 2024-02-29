import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    name_user: new FormControl('', Validators.required),
    password_user: new FormControl('', Validators.required),
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      name_user: ['', Validators.required],
      password_user: ['', Validators.required],
    });
  }

  async onSubmit() {
    const res = await this.authService.onLogin(
      this.loginForm.value['name_user'],
      this.loginForm.value['password_user'],
    );
    if (res.status === 200) {
      console.log('Failed to login', res.status);
    }
    console.log('Login correcto', res.data);
    localStorage.setItem('token', res.data.token);
    this.router.navigate(['/admin']);
  }
}
