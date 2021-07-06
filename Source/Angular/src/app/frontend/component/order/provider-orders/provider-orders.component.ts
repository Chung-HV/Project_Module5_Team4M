import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/frontend/services/order.service';
import { ProviderService } from 'src/app/frontend/services/provider.service';

@Component({
  selector: 'app-provider-orders',
  templateUrl: './provider-orders.component.html',
  styleUrls: ['./provider-orders.component.css']
})
export class ProviderOrdersComponent implements OnInit {
  provider:any
  provider_id: any
  provider_price: any
  orders: any
  customers: any
  order_details: any
  constructor(
    private providerService: ProviderService,
    private orderService: OrderService,
    private toastr: ToastrService
  ) {
    this.provider_id = localStorage.getItem('user_id');
    this.provider_price = localStorage.getItem('user_price');
    this.getOrders();
  }

  ngOnInit(): void {
  }

  getOrders() {
    this.providerService.getOrders(this.provider_id).subscribe({
      next: (data: any) => {
        this.orders = data.orders;
        this.customers = data.customers;
        this.order_details = data.order_details;
        this.provider = data.provider;
        console.log(this.order_details);
      }
    })
  }

  updateOrder(order_id: any, order_status: any) {
    this.orderService.updateOrder(order_id, order_status).subscribe({
      next: (data) => {
        console.log(data);
        this.toastr.success(
          'Your request has been sent, please wait for Admin approvement'
        )
        // location.reload();
      }
    })
  }
}
