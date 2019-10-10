import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserRegistationService } from '../services/user-registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  forgetForm: FormGroup ;
  loading = false;
  constructor(private service: UserRegistationService,
              private router: Router) { }

  ngOnInit() {
    this.forgetForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required]),
      }
    );
  }
  onSubmit() {
    console.log(this.forgetForm.value);
    if (this.forgetForm.invalid) {
      return;
    }
    this.service.doforgetPassword(this.forgetForm.value)
    .subscribe(
      (response: any) => {
        if (response.status === 200) {
           this.router.navigate(['/login']);
           console.log(response.message);
        } else {
          this.router.navigate(['/forgetpassword']);
        }
      },
      error => {
        console.log('failed');
        this.loading = false;
      }
    );
  }
}
