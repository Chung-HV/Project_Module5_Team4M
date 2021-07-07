import { Component, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { OrderService } from 'src/app/backend/services/order.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class OrderListComponent implements OnInit {
  orders:any
  order_details:any
  customers:any
  providers:any
  private paginate!: PaginationInstance;

  order_detail: any
  base_Url_img = environment.base_Url_img;
  constructor(
    private orderService: OrderService,
    ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.orderService.getAll().subscribe({
      next: (data:any)=>{
        this.orders = data.orders,

        this.providers = this.orders.data.providers,
        this.customers = this.orders.data.customers,
        this.order_details = this.orders.data.order_details,
        console.log(this.order_details);
        
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
      'cost': this.providers[i].price*this.order_details[i].time,
      'status': this.orders[i].status,
      'report': 'report',
    }
    this.order_detail = [];
    this.order_detail.push(data);
    console.log(this.customers);
    
  }
}
