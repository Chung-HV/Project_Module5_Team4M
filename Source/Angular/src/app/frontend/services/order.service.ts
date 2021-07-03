import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getCustomer(order_id:any):Observable<any>{
    return this.http.get<any>(`${environment.base_Url}/order/${order_id}/customer`)
  }
}
