import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  public user!: Observable<User>;
  user_id:any = localStorage.getItem('user_id');

  constructor(private router: Router, private http: HttpClient) { }

  profile(): Observable<any> {
    var auth_token = localStorage.getItem('token');
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',

      Authorization: 'Bearer ' + auth_token,
    });
    // console.log(auth_token);
    return this.http.get(`${environment.base_Url}users/profile`, {
      headers: reqHeader,
    });
  }

  createAlbum(id: number, album: any): Observable<any> {
    var auth_token = localStorage.getItem('token');
    var reqHeader = new HttpHeaders({


      Authorization: 'Bearer ' + auth_token,
    });


    return this.http.post(`${environment.base_Url}album/create/${id}`, album, {
      headers: reqHeader,
    });
  }
}
