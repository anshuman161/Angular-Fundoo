import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegistationService } from 'src/app/services/user-registration.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private service: UserRegistationService,
              private router: Router) { }

  ngOnInit() {
        this.registerForm = new FormGroup
        (
          {
            username: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required]),
            phoneno: new FormControl('', [Validators.required]),
            address: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required]),
          }
        );
  }
  onSubmit() {
    console.log(this.registerForm.value);
    this.service.doRegistration(this.registerForm.value)
    .subscribe(
      (response: any) => {
          this.router.navigate(['/login']);
          console.log(response.message);
      },
      error => {
        console.log(error);
        this.router.navigate(['/registration']);
      }
    );
  }

}
