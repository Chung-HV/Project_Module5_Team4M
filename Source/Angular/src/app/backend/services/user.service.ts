import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private htpp: HttpClient, private route: Router) { }

  getRequestingProvider(): Observable<any> {
    return this.htpp.get<any>(`${environment.base_Url}provider/requesting`)
  }

  approveRequest(provider_id:any): Observable<any>{
    return this.htpp.get<any>(`${environment.base_Url}provider/${provider_id}/approve`)
  }
}
