import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  reqHeader:any
  constructor(private http: HttpClient) {
    var auth_token = localStorage.getItem('token');
    this.reqHeader = new HttpHeaders({
      // 'Content-Type': 'application/json',

      Authorization: 'Bearer ' + auth_token,
    });
   }

  getAll():Observable<any>{
    return this.http.get<any>(`${environment.base_Url}admin/orders`,{headers: this.reqHeader})
  }

  getByStatus(status:any){
    return this.http.get<any>(`${environment.base_Url}admin/orders/${status}`)
  }
}
