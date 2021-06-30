import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
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
     console.log(`${environment.base_Url}users/login`);
     return this.http.post(`${environment.base_Url}users/login`, user);
   }

   logout (): Observable<any> {
     let token = localStorage.getItem('token')
     return this.http.post(`${environment.base_Url}users/logout`, token);
   }
   updateUserProfile (id: number,user:User): Observable<any> {
     return this.http.post(`${environment.base_Url}users/update/${id}`,user);
   }
}
