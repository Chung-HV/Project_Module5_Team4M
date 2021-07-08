import {
  Component,
  EventEmitter,
  NgIterable,
  OnInit,
  Output,
} from '@angular/core';
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
    price: '500000',
    name: '',
    count_view: '',
    count_rent: '',
  };
  search_user_name!:any;
  count_filter: any = 0;
  filter_user: any = null;
  users!: UserDashboard[];
  vip_user!: UserDashboard[];
  new_user!: UserDashboard[];
  base_Url_img = environment.base_Url_img;
  active1: boolean = false;
  active2: boolean = false;
  active_max: boolean = false;
  active_min: boolean = false;
  active_max_rent: boolean = false;
  active_min_rent: boolean = false;
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
  clickMaxRent() {
    this.clearView();
    if (this.active_max_rent == false) {
      this.filter.count_rent = 'max';
    } else {
      this.filter.count_rent = '';
    }
    if (this.active_min_rent) {
      this.active_max_rent = !this.active_max_rent;
      this.active_min_rent = false;
    } else {
      this.active_max_rent = !this.active_max_rent;
    }
  }
  clickMinRent() {
    this.clearView();
    if (this.active_min_rent == false) {
      this.filter.count_rent = 'min';
    } else {
      this.filter.count_rent = '';
    }
    if (this.active_max_rent) {
      this.active_max_rent = false;
      this.active_min_rent = !this.active_min_rent;

    } else {
      this.active_min_rent = !this.active_min_rent;
    }
  }
  clearRent() {
    this.active_max_rent = false;
    this.active_min_rent = false;
    this.filter.count_rent = '';
  }
  clickMaxView() {
    this.clearRent();
    if (this.active_max == false) {
      this.filter.count_view = 'max';
    } else {
      this.filter.count_view = '';
    }
    if (this.active_min) {
      this.active_max = !this.active_max;
      this.active_min = false;
    } else {
      this.active_max = !this.active_max;
    }
  }
  clickMinView() {
    this.clearRent();
    if (this.active_min == false) {
      this.filter.count_view = 'min';
    } else {
      this.filter.count_view = '';
    }

    if (this.active_max) {
      this.active_max = false;
      this.active_min = !this.active_min;
    } else {
      this.active_min = !this.active_min;
    }
  }
  clearView() {
    this.active_max = false;
    this.active_min = false;
    this.filter.count_view = '';
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
    this.filter.count_view = '';
    this.active1 = false;
    this.active2 = false;
  }
  removeName() {
    this.filter.name = '';
  }
  removeCity() {
    this.filter.city = '';
  }
  removePrice() {
    this.filter.price = '';
  }
  removeFilter() {
    this.filter_user = null;
  }
  saveFilter() {
    const data = {
      name: this.filter.name,
      gender: this.filter.gender,
      price: this.filter.price,
      city: this.filter.city,
      count_view: this.filter.count_view,
      count_rent: this.filter.count_rent,
    };
console.log(data);

    this.homeService.getFilter(data).subscribe(
      (response) => {
        this.filter_user = response;
        if (Object.keys(this.filter_user).length == 0) {
          this.count_filter = 0;
        } else {
          this.count_filter = Object.keys(this.filter_user).length;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  searchUserName(){
    const data ={
      search_user_name : this.search_user_name,
    }
    this.homeService.getUserName(data).subscribe(
      (response) => {
        this.filter_user = response;
        console.log(this.filter_user);

        if (Object.keys(this.filter_user).length == 0) {
          this.count_filter = 0;
        } else {
          this.count_filter = Object.keys(this.filter_user).length;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  increaseView($id: any) {
    const data = {
      id: $id,
      user_id: localStorage.getItem('user_id'),
    };
    this.homeService.increaseView(data).subscribe(
      (response) => {},
      (error) => {
        console.log(error);
      }
    );
  }
}
