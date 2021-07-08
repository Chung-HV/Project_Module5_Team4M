import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/frontend/services/order.service';
import { ProviderService } from 'src/app/frontend/services/provider.service';
import { UserService } from 'src/app/frontend/services/user.service';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css']
})
export class CustomerOrdersComponent implements OnInit {
  order_details: any
  providers: any = [];
  orders: any;

  user_id = localStorage.getItem('user_id');
  constructor(
    private userService: UserService,
    private orderService: OrderService,
    private providerService: ProviderService,
    private order: OrderService,
    private toastr: ToastrService
  ) {
    this.getOrders();

  }

  ngOnInit(): void {
  }
  getOrderDetetail() {

  }

  getOrders() {
    this.userService.getOrders().subscribe({
      next: (data: any) => {
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

  updateOrder(order_id: any, order_status: any) {
    this.orderService.updateOrder(order_id, order_status).subscribe({
      next: (data) => {
        console.log(data);
        this.getOrders();
        this.toastr.success(
          'Yêu cầu của bạn đã được gủi đi, vui lòng chờ xác nhận'
        )
        // location.reload();
      }
    });
  }
}
