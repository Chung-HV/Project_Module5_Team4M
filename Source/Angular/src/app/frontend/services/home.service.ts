import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  getFilter(data:any): Observable<any>{
    return this.http.post(`${baseUrl}/filter`,data);
  }

  orderServiceProvider(data:any): Observable<any> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(`${baseUrl}/order_service_provider`, data, {headers:reqHeader});
  }
  increaseView(data:any):Observable<any>{

    return this.http.post(`${baseUrl}/view`,data,);
  }
}
