import { Component, OnInit } from '@angular/core';
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
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.orderService.getAll().subscribe({
      next: (data:any)=>{
        this.orders = data.orders,
        this.providers = data.providers,
        this.customers = data.customers,
        this.order_details = data.order_details,
        console.log(this.order_details);
        
      }
    })
  }
}
