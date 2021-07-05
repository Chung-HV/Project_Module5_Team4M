import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../models/user';
import { DataService } from '../../services/data.service';
import { ProviderService } from '../../services/provider.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-frontend-home',
  templateUrl: './frontend-home.component.html',
  styleUrls: ['./frontend-home.component.css'],
})
export class FrontendHomeComponent implements OnInit {
  check: any = this.data.currentCheck.subscribe(
    (check) => (this.check = check)
  );
  money: any = this.data.currentMoney.subscribe(
    (money) => (this.money = money)
  );
  user!: any;
  // money = localStorage.getItem('user_mooney');
  provider_id: any;
  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
    private data: DataService,
    private providerService: ProviderService
  ) {
    this.provider_id = localStorage.getItem('user_id');
  }

  ngOnInit(): void {
    this.isLogin();
    console.log(localStorage.getItem('token'));
    this.getUser();
  
  }

  logOut() {
    this.userService.logout().subscribe({
      next: () => {
        localStorage.clear();
        this.data.changeCheck(true);
        this.router.navigate(['']);
      },
      error: () => {},
    });
  }
  isLogin() {
    if (localStorage.getItem('token') != null) {
      this.check = false;
    } else {
      this.check = true;
    }
  }

  requestProvide() {
    console.log(localStorage.getItem('user_id'));
    this.providerService.sendRequest(this.provider_id).subscribe({
      next: () =>
        this.toastr.success(
          'Your request has been sent, please wait for Admin approvement'
        ),
    });
  }
  getUser() {
    this.userService.profile().subscribe({
      next: (res: any) => {
        this.user = res;

        this.user.avatar = `${environment.base_Url_img}${this.user.avatar}`;
        console.log(this.user.is_service_provider);
      },
      error: (error: any) => {},
    });
  }
}
