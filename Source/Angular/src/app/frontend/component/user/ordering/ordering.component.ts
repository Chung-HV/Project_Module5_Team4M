import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/frontend/services/order.service';
import { ProviderService } from 'src/app/frontend/services/provider.service';
import { UserService } from 'src/app/frontend/services/user.service';

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.css']
})
export class OrderingComponent implements OnInit {
  order_details: any
  providers: any = [];
  orders: any;

  user_id = localStorage.getItem('user_id');
  constructor(
    private userService: UserService,
    private orderService: OrderService,
    private providerService: ProviderService,
    private order: OrderService,
  ) {
    this.getOrders();

  }

  ngOnInit(): void {
  }
  getOrderDetetail() {

  }

  getOrders() {
    this.userService.getOrders().subscribe({
      next: (data:any) => {
        this.orders = data.orders,
        this.providers = data.providers,
        this.order_details = data.order_details
        // console.log(data);
        
      }
    })
  }

  getProviders(provider_id: any) {
    this.providerService.getById(provider_id).subscribe({
      next: provider => {
        this.providers = this.providers.push(provider),
        console.log(this.providers);
      }
    })
  }
}
