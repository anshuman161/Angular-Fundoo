import { Component, OnInit } from '@angular/core';
import { UserRegistationService } from '../services/user-registration.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
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
      (response: any) => {
          this.router.navigate(['/dashboard']);
          console.log(response.message);
      },
      error => {
        this.errorMessage = 'email or password is wrong!!';
        console.log(error);
      }
    );
  }
}
