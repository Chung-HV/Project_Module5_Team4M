import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/frontend/services/order.service';
import { ProviderService } from 'src/app/frontend/services/provider.service';
import { environment } from 'src/environments/environment.prod';

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
  base_Url_img = environment.base_Url_img;


  order_detail:any = [];
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
        this.orders = data.orders.data;
        this.customers = data.customers;
        this.order_details = data.order_details;
        this.provider = data.provider;
      }
    })
  }

  updateOrder(order_id: any, order_status: any) {
    this.orderService.updateOrder(order_id, order_status).subscribe({
      next: (data) => {
        console.log(data);
        this.toastr.success(
          'Yêu cầu của bạn đã được gủi đi, vui lòng chờ xác nhận'
        )
        // location.reload();
      }
    })
  }

  setOrderDetailData(i:any){
    const data:any = {
      'id': this.orders[i].id,
      'customer': this.customers[i].name,
      'avatar': this.base_Url_img+this.customers[i].avatar,
      'address': this.order_details[i].address,
      'time': this.order_details[i].time,
      'start_time': this.order_details[i].start_time,
      'date': this.order_details[i].start_at,
      'cost': this.provider.price*this.order_details[i].time,
      'status': this.orders[i].status,
      'report': 'report',
    }
    this.order_detail = [];
    this.order_detail.push(data);
    
  }
}
