import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Service } from '../model/service';

const API_URL = `${environment.base_Url}`
@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Service[]>{
    return this.http.get<Service[]>(API_URL+'/user/service');
  }
}
