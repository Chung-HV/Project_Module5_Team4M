import { Component, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { OrderService } from 'src/app/backend/services/order.service';

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
}
