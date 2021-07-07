import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/frontend/services/order.service';
import { ProviderService } from 'src/app/frontend/services/provider.service';
import { UserService } from 'src/app/frontend/services/user.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css']
})
export class CustomerOrdersComponent implements OnInit {
  order_details: any
  providers: any = [];
  orders: any;
  order_detail: any
  base_Url_img = environment.base_Url_img;

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
    this.orderService.getByCustomer(this.user_id).subscribe({
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
        this.toastr.success(
          'Your request has been sent, please wait for Admin approvement'
        )
        // location.reload();
      }
    });
  }

  setOrderDetailData(i:any){
    const data:any = {
      'id': this.orders[i].id,
      'provider': this.providers[i].name,
      'avatar': this.base_Url_img+this.providers[i].avatar,
      'address': this.order_details[i].address,
      'time': this.order_details[i].time,
      'start_time': this.order_details[i].start_time,
      'date': this.order_details[i].start_at,
      'cost': this.providers[i].price*this.order_details[i].time,
      'status': this.orders[i].status,
      'report': 'report',
    }
    this.order_detail = [];
    this.order_detail.push(data);
    console.log(this.order_detail);
    
  }
}
