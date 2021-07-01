import { environment } from './../../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user !: Observable<User>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
   }

   register (user: User): Observable<any> {
     return this.http.post(`${environment.base_Url}users/register`, user);
   }

   login (user: User): Observable<any> {
     return this.http.post(`${environment.base_Url}users/login`, user);
   }

   logout (): Observable<any> {
    var auth_token = localStorage.getItem('token');
     return this.http.post(`${environment.base_Url}users/logout`, auth_token);
   }
   profile(): Observable<any> {
    var auth_token = localStorage.getItem('token');
    // console.log(auth_token);

     var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.get(`${environment.base_Url}users/profile`,{headers: reqHeader });
   }
   updateUserProfile(id:number,user:any): Observable<any> {
    var auth_token = localStorage.getItem('token');
    // console.log(auth_token);

     var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    });
     return this.http.post(`${environment.base_Url}users/update/${id}`,user, {headers: reqHeader });
   }
}
