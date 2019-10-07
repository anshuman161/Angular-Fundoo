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
    if (this.loginForm.invalid) {

      return ;
    }
    this.service.doLogIn(this.loginForm.value)
    .subscribe(
      (response: any) => {
        console.log(response.message);
        this.router.navigate(['/dashboard']);
      },
      error => {
        this.loading = false;
      }
    );
  }
}
