import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../services/provider.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  provider_id: any
  provider_price:any
  orders: any
  customers: any
  order_details: any
  constructor(
    private userService: UserService,
    private providerService: ProviderService
    ) {
    this.provider_id = localStorage.getItem('user_id');
    this.provider_price = localStorage.getItem('user_price');
    this.getOrderHistory();
   }

  ngOnInit(): void {
  }

  getOrderHistory(){
    this.userService.getOrderHistory(this.provider_id).subscribe({
      next: (data:any) => { 
        this.orders = data.orders;
        this.customers = data.customers;
        this.order_details = data.order_details;
        console.log(this.order_details);
      }
    })
  }
  getCustomers(){
    
  }
}
