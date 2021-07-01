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
  defaultServices: Service[] = [];
  freeServices: Service[] = [];
  extraServices: Service[] = [];
  providingServices: Service[] = [];
  provider_id: any
  newProvidingServices: Service[] = [];

  constructor(private serviceProvider: ServiceProviderService, private route: ActivatedRoute) {

    // this.getDefaultServices();
  }

  ngOnInit(
  ):
    void {
    this.provider_id = this.route.snapshot.paramMap.get('id');
    this.getAll();
    this.getProvidingService(this.provider_id);
    this.getDefaultServices();
  }

  getAll() {
    this.serviceProvider.getServices().subscribe(
      services => {
        this.services = services,
        this.getDefaultServices(),       
        this.getFreeServices(),       
        this.getExtraServices()      
      }
    );
  }

  getDefaultServices() {
    this.services.forEach(service => {
      if (service.type == 'default') {
        this.defaultServices.push(service);
        this.newProvidingServices.push(service.id);
      }
    });
    
  }

  getExtraServices() {
    this.services.forEach(service => {
      if (service.type == 'extra') {
        this.extraServices.push(service);
      }
    });
  }

  getFreeServices() {
    this.services.forEach(service => {
      if (service.type == 'free') {
        this.freeServices.push(service);
      }
    });
  }

  getProvidingService(provider_id: any) {
    this.serviceProvider.getProvidingServices(provider_id).subscribe(
      providingServices => {
        this.providingServices = providingServices
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
    alert('Services you want to provide have been set');
    console.log(this.providingServices);
  };
}



