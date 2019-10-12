import { Component, OnInit } from '@angular/core';
import { UserRegistationService } from 'src/app/services/user-registration.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetForm: FormGroup;

  private token: string;
  constructor(private service: UserRegistationService,
              private router: Router,
              private route: ActivatedRoute) { }
              ngOnInit() {
               // this.token = this.route.snapshot.paramMap.get('token');
                this.resetForm = new FormGroup({
                  password: new FormControl('', [Validators.required]),
                  confirmPassword: new FormControl('', [Validators.required])
                });
                this.route.params.subscribe(param => {
                  this.token = param.token; });
              }
              resetPassword(form: NgForm) {
                console.log(this.resetForm);
                if (this.resetForm.invalid) {
                  console.log('refuse');
                  return;
                }
                this.service.doResePassword(this.resetForm.value, this.token)
                  .subscribe(
                    (response: any) => {
                      console.log('refuse');
                      this.router.navigate(['/login']);
                    },
                    error => {
                      console.log(error);
                    }
                  );
              }
}
