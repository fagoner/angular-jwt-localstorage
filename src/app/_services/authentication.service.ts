import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../_models';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly uri: string = "http://localhost:8095";

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
  }

  login(username: string, password: string): Promise<User> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const body = new HttpParams()
      .set('username', username)
      .set('password', password)

    return this.httpClient.post<User>(`${this.uri}/api/login`, body, { headers: headers }).toPromise();
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('accessToken');
  }

  logout() {
    localStorage.removeItem('accessToken');
    this.router.navigate(['/login']);
  }

  setToken(accessToken: string) {
    localStorage.setItem('accessToken', accessToken);
  }

  getToken(): string {
    return localStorage.getItem('accessToken');
  }

}
