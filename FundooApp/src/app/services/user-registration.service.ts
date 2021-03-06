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

  public doLogIn(data: any) {
    return this.http.post('http://localhost:8080/user/goLogin', data);
  }

  public doforgetPassword(email: any) {
    return this.http.post('http://localhost:8080/user/forgetPassword?email=' + email.email, null);
  }
  public doResePassword(resetpassword: any, token: any) {
    // tslint:disable-next-line: max-line-length
    return this.http.post('http://localhost:8080/user/changePassword/' + token, resetpassword, { responseType: 'text' as 'json' });
  }
}
