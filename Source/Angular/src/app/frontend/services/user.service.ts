import { environment } from './../../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';


const auth_token = localStorage.getItem('token');
const reqHeader = new HttpHeaders({
  'Content-Type': 'application/json',

  'Authorization': 'Bearer ' + auth_token
});

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
    console.log(auth_token);
     return this.http.post(`${environment.base_Url}users/login`, user);
   }

   logout (): Observable<any> {
     console.log(auth_token);
     return this.http.post(`${environment.base_Url}users/logout`, {responseType: 'json', headers: reqHeader } );
   }
   profile(): Observable<any> {
    console.log(auth_token);
    return this.http.get(`${environment.base_Url}/users/profile`, { responseType: 'json', headers: reqHeader });
   }
   updateUserProfile (id: number,user:User): Observable<any> {
     return this.http.post(`${environment.base_Url}users/update/${id}`,user);
   }
}
