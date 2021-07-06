import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Service } from 'src/app/frontend/models/service';
import { ProviderService } from 'src/app/frontend/services/provider.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  services: Service[] = [];
  defaultServices: Service[] = [];
  freeServices: Service[] = [];
  freeServiceIds: any[] = [];
  extraServices: Service[] = [];
  is_active: any;

  providingServices: Service[] = [];
  providingExtraServiceIds: any[] = [];
  providingExtraServices: Service[] = [];
  providingFreeServices: any[] = [];
  providingFreeServiceIds: any[] = [];

  provider_id: any
  newProvidingServices: Service[] = [];

  constructor(
    private serviceProvider: ProviderService,
    private route: ActivatedRoute,
    private toastr: ToastrService)
     {

    // this.getDefaultServices();
  }

  ngOnInit(
  ):
    void {
    this.provider_id = localStorage.getItem('user_id');
    this.getAll();
    this.getDefaultServices();
    this.getProvidingServices(this.provider_id);
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
        this.freeServiceIds.push(service.id)
      }
    });

  }

  getProvidingServices(provider_id: any) {
    this.serviceProvider.getProvidingServices(provider_id).subscribe(
      providingServices => {
        this.providingServices = providingServices,
          // this.getDefaultServices(),       
          this.getProvidingFreeServices(),
          this.getProvidingExtraServices()
      }
    );
  }

  getProvidingExtraServices() {
    this.providingServices.forEach(service => {
      if (service.type == 'extra') {
        this.providingExtraServices.push(service);
        this.providingExtraServiceIds.push(service.id);
        this.newProvidingServices.push(service.id);
      }
    });
  }

  getProvidingFreeServices() {
    this.providingServices.forEach(service => {
      if (service.type == 'free') {
        this.providingFreeServices.push(service);
        this.providingFreeServiceIds.push(service.id);
        this.newProvidingServices.push(service.id);
      }
    });
    console.log(this.providingFreeServiceIds);

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
        this.toastr.success('Các dịch vụ đã được cập nhật')
      }
    );
  };
}



