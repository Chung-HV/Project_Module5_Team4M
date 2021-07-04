import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private route: Router) { }

  getAllProviders(): Observable<any> {
    return this.http.get<any>(`${environment.base_Url}provider`)
  }

  getRequestingProvider(): Observable<any> {
    return this.http.get<any>(`${environment.base_Url}admin/provider/requesting`)
  }

  approveRequest(provider_id:any): Observable<any>{
    return this.http.get<any>(`${environment.base_Url}provider/${provider_id}/approve`)
  }

  setVip(provider_id:any): Observable<any>{
    return this.http.get<any>(`${environment.base_Url}provider/${provider_id}/setvip`)
  }
}
