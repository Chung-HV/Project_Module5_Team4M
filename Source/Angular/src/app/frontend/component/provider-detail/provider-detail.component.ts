import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-provider-detail',
  templateUrl: './provider-detail.component.html',
  styleUrls: ['./provider-detail.component.css'],
})
export class ProviderDetailComponent implements OnInit {
  users!: any;
  price!: number;
  message = '';

  user_id = localStorage.getItem('user_id');
  user_server_provider!:any;
  order = {
    user_id: localStorage.getItem('user_id'),

    address: '',
    start_at: '',
    time_rent: 0.5,
  };

  constructor(
    private homeService: HomeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getUser(this.route.snapshot.paramMap.get('id'));
    // console.log(localStorage.getItem('user_id'));


  }
  getUser(id: any) {
    this.homeService.getUser(id).subscribe(
      (data) => {
        this.users = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  saveOrder(): void {
    this.users.forEach((user: any) => {
      this.user_server_provider=user.id;
   });
    const data = {
      user_id:this.order.user_id,
      service_provider_id:this.user_server_provider,
      address: this.order.address,
      time: this.order.time_rent,
      start_at: this.order.start_at,
    };
    console.log(this.users);

    console.log(data);


    this.homeService.orderServiceProvider(data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
