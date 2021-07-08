import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { HomeService } from '../../../services/home.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/frontend/services/user.service';


@Component({
  selector: 'app-provider-detail',
  templateUrl: './provider-detail.component.html',
  styleUrls: ['./provider-detail.component.css'],
})
export class ProviderDetailComponent implements OnInit {
  users!: any;
  price!: number;
  albums!:any;
  message = '';
  base_Url_img = environment.base_Url_img;
  submitted = false;

  user_id = localStorage.getItem('user_id');

  user_server_provider!: any;
  count_view!: any;
  order = {
    address: '',
    start_at: '',
    start_time: '',
    time_rent: 0.5,
  };
  money: any;

  constructor(
    private userService: UserService,
    private homeService: HomeService,
    private router: Router,
    private route: ActivatedRoute,
    private data: DataService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getUser(this.route.snapshot.paramMap.get('id'));
    this.getAlbum(this.route.snapshot.paramMap.get('id'));
    this.getAuthMoney();
    // console.log(localStorage.getItem('user_id'));
  }
  getUser(id: any) {
    this.homeService.getUser(id).subscribe(
      (data) => {
        this.users = data;

      },
      (error) => {
        console.log(error);
      }
    );
  }

  saveOrder(): void {
    this.submitted = true;
    this.users.forEach((user: any) => {
      this.user_server_provider = user.id;
    });
    const data = {
      user_id: this.user_id,
      service_provider_id: this.user_server_provider,
      address: this.order.address,
      time: this.order.time_rent,
      start_at: this.order.start_at,
      start_time: this.order.start_time,
    };

    this.homeService.orderServiceProvider(data).subscribe(
      (response) => {
        this.toastr.success('Đặt lịch thuê thành công, vui lòng chờ xác nhận');
        // this.router.navigate(['frontend/user/orders'])
      },
      (error) => {
        console.log(error);
      }
    );
  }
  changeMoney(){
    const money = this.money - (this.users.price*this.order.time_rent);
    var cost:any = this.users.price*this.order.time_rent;
    localStorage.setItem('cost', cost);
    this.userService.changeMoney(money).subscribe(
      (res) => {
      },
      (error) => {
        console.log(error);
      }
    )
  }

  getAlbum(id:any){
    this.homeService.getAlbumByUser(id).subscribe(
      (data) => {
        this.albums = data
    },
    (error) => {
      console.log(error);
    });
  }
  getAuthMoney(){
    this.userService.profile().subscribe({
      next: (res: any) => {
        this.money = res.money;
      },
      error: (error: any) => {},
    });
  }
}
