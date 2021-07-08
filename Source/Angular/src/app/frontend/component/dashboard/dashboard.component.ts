import { Component, EventEmitter, NgIterable, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserDashboard } from '../../models/userDashboard';
import { environment } from 'src/environments/environment.prod';

import { HomeService } from '../../services/home.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @Output() closeModalEvent = new EventEmitter<boolean>();
  filter = {
    gender: '',
    city: '',
    price: '500000' ,
    name: '',
  };
  count_view!:number;
  count_filter: any = 0;
  filter_user: any = null;
  users!: UserDashboard[];
  vip_user!: UserDashboard[];
  new_user!: UserDashboard[];
  base_Url_img = environment.base_Url_img;
  active1: boolean = false;
  active2: boolean = false;

  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit(): void {
    this.showUserService();
    this.showVipUser();
    this.showNewUser();
  }
  showUserService(): void {
    this.homeService.getAll().subscribe(
      (data) => {
        this.users = data;
        console.log(this.users);

        
      },
      (error) => {
        console.log(error);
      }
    );
  }
  showVipUser(): void {
    this.homeService.getVipUser().subscribe(
      (data) => {
        this.vip_user = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  showNewUser(): void {
    this.homeService.getNewUser().subscribe(
      (data) => {
        this.new_user = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  clickEvent1() {
    if (this.active1 == false) {
      this.filter.gender = 'male';
    } else {
      this.filter.gender = '';
    }
    if (this.active2) {
      this.active1 = !this.active1;
      this.active2 = false;
    } else {
      this.active1 = !this.active1;
    }

    console.log();
  }
  clickEvent2() {
    // this.gender!=document.getElementById('Female')?.getAttribute('value');
    if (this.active2 == false) {
      this.filter.gender = 'Female';
    } else {
      this.filter.gender = '';
    }
    if (this.active1) {
      this.active1 = false;
      this.active2 = !this.active2;
    } else {
      this.active2 = !this.active2;
    }
  }
  clickEvent3() {
    this.filter.gender = '';
    this.active1 = false;
    this.active2 = false;
  }
  removeName() {
    this.filter.name = '';
  }
  removeCity() {
    this.filter.city = '';
  }
  removePrice(){
    this.filter.price = '';
  }
  saveFilter() {

    // console.log(this.filter.gender);
    // console.log(this.filter.city);
    // console.log(this.filter.name);
    const data = {
      name: this.filter.name,
      gender: this.filter.gender,
      price: this.filter.price,
      city: this.filter.city,
    };
    // console.log(data);

    this.homeService.getFilter(data).subscribe(
      (response) => {
        //console.log(response);
        this.filter_user = response;
        if (Object.keys(this.filter_user).length == 0) {
          this.count_filter = 0;
        } else {
          this.count_filter = 1;
        }

      },
      (error) => {
        console.log(error);
      }
    );
  }
  increaseView($id:any){
    const data={
      id: $id,
      user_id:localStorage.getItem('user_id')
    }
    this.homeService.increaseView(data).subscribe(
      (response) =>{

        },
      (error) => {
        console.log(error);
      }
    )
  }
}
