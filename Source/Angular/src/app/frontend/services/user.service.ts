import { environment } from './../../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user!: Observable<User>;

  constructor(private router: Router, private http: HttpClient) {}

  register(user: User): Observable<any> {
    return this.http.post(`${environment.base_Url}users/register`, user);
  }

  login(user: User): Observable<any> {
    return this.http.post(`${environment.base_Url}users/login`, user);
  }

  logout(): Observable<any> {
    var auth_token = localStorage.getItem('token');
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',

      Authorization: 'Bearer ' + auth_token,
    });
    console.log(auth_token+'logout');
    return this.http.get(`${environment.base_Url}users/logout`, {
      headers: reqHeader
    });
  }
  profile(): Observable<any> {
    var auth_token = localStorage.getItem('token');
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',

      Authorization: 'Bearer ' + auth_token,
    });
    // console.log(auth_token);
    return this.http.get(`${environment.base_Url}users/profile`, {
      headers: reqHeader
    });
  }
  updateUserProfile(id: number, user: any): Observable<any> {
    var auth_token = localStorage.getItem('token');
    var reqHeader = new HttpHeaders({
      // 'Content-Type': 'application/json',

      Authorization: 'Bearer ' + auth_token,
    });
    // console.log(user);

    return this.http.post(`${environment.base_Url}users/update/${id}`, user, {
      headers: reqHeader,
    });
  }

  getOrderHistory(user_id:any){
    return this.http.get(`${environment.base_Url}users/${user_id}/profile/order-history`)
  }

  getById(user_id:any):Observable<any>{
    return this.http.get<any>(`${environment.base_Url}${user_id}/provider`)
  }
}
