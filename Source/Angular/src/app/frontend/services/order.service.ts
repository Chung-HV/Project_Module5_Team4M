import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  getCustomer(order_id:any):Observable<any>{
    return this.http.get<any>(`${environment.base_Url}order/${order_id}/customer`)
  }

  updateOrder(order_id:any,order_status:any):Observable<any>{
    const data = {'order_id':order_id,'order_status':order_status};
    console.log(data)
    return this.http.post<any>(`${environment.base_Url}orders/update`,data)
  }

  getByCustomer(customer_id:any){
    return this.http.get<any>(`${environment.base_Url}orders/customer/${customer_id}`,{headers: this.reqHeader})
  }

  
}
