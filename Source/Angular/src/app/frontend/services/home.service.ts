import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

const baseUrl =`${environment.base_Url}dashboard`
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }
  getVipUser(): Observable<any> {
    return this.http.get(`${baseUrl}/user_vip`);
  }
  getNewUser(): Observable<any> {
    return this.http.get(`${baseUrl}/user_new`)
  }
  getUser(id:any): Observable<any> {
    return this.http.get(`${baseUrl}/ ${id}`);
  }

  orderServiceProvider(data:any): Observable<any> {
    return this.http.get(`${baseUrl}/order_service_provider`);
  }
}
