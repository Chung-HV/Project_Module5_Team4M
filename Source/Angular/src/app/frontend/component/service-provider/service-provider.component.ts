import { Component, OnInit } from '@angular/core';
import { Service } from '../../model/service';
import { ServiceProviderService } from '../../services/service-provider.service';

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.css']
})
export class ServiceProviderComponent implements OnInit {

  services: Service[] = [];
  constructor(private serviceProvider: ServiceProviderService) {
    this.showAll()
   }

  ngOnInit(): void {
  }
  showAll(){
    this.serviceProvider.getAll().subscribe(
      services => this.services = services
    );
  }
}
