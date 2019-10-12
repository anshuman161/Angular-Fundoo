import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserRegistationService } from 'src/app/services/user-registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  errorMessage: string;
  constructor(private service: UserRegistationService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
      }
    );
  }
  onSubmit() {
    console.log(this.loginForm.value);
    this.service.doLogIn(this.loginForm.value)
    .subscribe(
      (data: any) => {
        localStorage.setItem('token', data.messege);
        this.router.navigate(['/dashboard']);
      },
      error => {
        this.errorMessage = 'email or password is wrong!!';
        console.log(error);
      }
    );
  }
}
