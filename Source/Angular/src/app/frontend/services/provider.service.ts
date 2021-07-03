import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Service } from '../models/service';

const API_URL = `${environment.base_Url}`
@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {

  constructor(private http:HttpClient) { }

  getServices():Observable<Service[]>{
    return this.http.get<Service[]>(API_URL+'provider/service');
  }

  getById(provider_id:any):Observable<any>{
    return this.http.get<any>(`${API_URL}${provider_id}/provider`)
  }

  updateProvidingServices(provider_id:any, services:any):Observable<any>{
    const data = {"services":services}
    // console.log(data);
    return this.http.post<any>(`${API_URL}provider/${provider_id}/service/update`,data)
  }

  getProvidingServices(provider_id:any):Observable<any>{
    return this.http.get<any>(`${API_URL}provider/${provider_id}/service`)
  }

  sendRequest(provider_id:any): Observable<any>{
    return this.http.get<any>(`${environment.base_Url}provider/${provider_id}/request`)
  }
}
