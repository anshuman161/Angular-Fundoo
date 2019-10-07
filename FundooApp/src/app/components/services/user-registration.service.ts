import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

export class UserRegistationService {
    constructor(private http: HttpClient) { }

  public doRegistration(user: any) {
    return this.http.post('http://localhost:8080/user/goRegister', user, {responseType: 'text' as 'json'});
}

public doLogIn(user: any) {
  return this.http.post('http://localhost:8080/user/goLogin', user, {responseType: 'text' as 'json'});
}

public doforgetPassword(user: any) {
  return this.http.post('http://localhost:8080/user/forgetPassword', user);
}
public doResePassword(user: any , token: any) {
  return this.http.post('http://localhost:8080/user/changePassword', user, token);
}


}
