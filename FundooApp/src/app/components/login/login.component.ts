import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserRegistationService } from 'src/app/services/user-registration.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  errorMessage: string;
  constructor(private service: UserRegistationService,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loginForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
      }
    );
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      return ;
    }
    this.service.doLogIn(this.loginForm.value)
    .subscribe(
      (data: any) => {
        localStorage.setItem('token', data.messege);
        this.router.navigate(['/dashboard']);
        this.snackBar.open('login successful');
      },
      error => {
        this.snackBar.open('Email or Password is wrong.');
             }
    );
  }
}
