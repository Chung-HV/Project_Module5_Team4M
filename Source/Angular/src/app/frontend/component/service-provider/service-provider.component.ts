import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../../models/service';
import { ServiceProviderService } from '../../services/service-provider.service';

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.css']
})
export class ServiceProviderComponent implements OnInit {

  services: Service[] = [];
  providingServices: Service[] = [];
  provider_id: any
  newProvidingServices: Service[] = [];

  constructor(private serviceProvider: ServiceProviderService, private route: ActivatedRoute) {
    this.provider_id = this.route.snapshot.paramMap.get('id');
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
      providingServices => {
        this.providingServices = providingServices,
          console.log(this.providingServices)
      }
    );
  }

  getNewProvidingServices(service_id: any) {
    if (this.newProvidingServices.indexOf(service_id) !== -1) {
      const index = this.newProvidingServices.indexOf(service_id);
      if (index > -1) {
        this.newProvidingServices.splice(index, 1);
      }
    }
    else {
      this.newProvidingServices.push(service_id);
    }
  }

  updateProvidingService(provider_id: any) {
    this.serviceProvider.updateProvidingServices(provider_id, this.newProvidingServices).subscribe(
      data => {
        console.log(data);
      }
    );
    alert('Your services you want to provide has been set');
  }
}


