import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../../model/service';
import { ServiceProviderService } from '../../services/service-provider.service';

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.css']
})
export class ServiceProviderComponent implements OnInit {

  services: Service[] = [];
  providingServices: Service[] = [];
  provider_id:any
  constructor(private serviceProvider: ServiceProviderService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.provider_id = params['id']
    });
    this.getAll();
    this.getProvidingService(this.provider_id);
  }

  ngOnInit(): void {
  }

  getAll() {
    this.serviceProvider.getServices().subscribe(
      services => this.services = services
    );
  }
  getProvidingService(provider_id: any) {
    this.serviceProvider.getProvidingServices(provider_id).subscribe(
      providingServices => this.providingServices = providingServices,
         
    );
    console.log(this.providingServices);
  }
}


