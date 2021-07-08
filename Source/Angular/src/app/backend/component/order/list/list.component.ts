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
      'id': this.orders.data[i].id,
      'customer': this.orders.data[i].customer.name,
      'provider': this.orders.data[i].provider.name,
      'address': this.orders.data[i].order_detail.address,
      'time': this.orders.data[i].order_detail.time,
      'start_time': this.orders.data[i].order_detail.start_time,
      'date': this.orders.data[i].order_detail.start_at,
      'cost': this.orders.data[i].provider.price*this.orders.data[i].order_detail.time,
      'status': this.orders.data[i].status,
      'report': 'report',
    }
    this.order_detail = [];
    this.order_detail.push(data);
  }

  getByStatus(status:any){
    this.orderService.getByStatus(status).subscribe({
      next: (data:any)=>{
        this.orders = data.orders,
        this.providers = this.orders.data.providers,
        this.customers = this.orders.data.customers,
        this.order_details = this.orders.data.order_details,
        console.log(this.order_details);  
      }
    })
  }
}
