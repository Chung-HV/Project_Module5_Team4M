import { Component, NgIterable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDashboard } from '../../models/userDashboard';

import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  users!: UserDashboard[];
  vip_user!: UserDashboard[];
  new_user!: UserDashboard[];
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
        console.log(data);
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
        console.log(data);
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
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
