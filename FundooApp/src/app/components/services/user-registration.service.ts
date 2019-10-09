import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserRegistationService {
  constructor(private http: HttpClient) { }

  public doRegistration(user: any) {
    return this.http.post('http://localhost:8080/user/goRegister', user, { responseType: 'text' as 'json' });
  }

  public doLogIn(user: any) {
    return this.http.post('http://localhost:8080/user/goLogin', user, { responseType: 'text' as 'json' });
  }

  public doforgetPassword(email: any) {
    console.log(email.email);
    return this.http.post('http://localhost:8080/user/forgetPassword?email=' + email.email, null);
  }
  public doResePassword(resetpassword: any, token: any) {
    // tslint:disable-next-line: max-line-length
    return this.http.post('http://localhost:8080/user/changePassword/' + token, resetpassword, { responseType: 'text' as 'json' });
  }
}
