import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../models/user';
import { DataService } from '../../services/data.service';
import { ProviderService } from '../../services/provider.service';
import { environment } from 'src/environments/environment.prod';
import { UserDashboard } from '../../models/userDashboard';

@Component({
  selector: 'app-frontend-home',
  templateUrl: './frontend-home.component.html',
  styleUrls: ['./frontend-home.component.css'],
})
export class FrontendHomeComponent implements OnInit {
  check: any = this.data.currentCheck.subscribe(
    (check) => (this.check = check)
  );
   base_Url_img=`${environment.base_Url_img}`;
  messages!:any;
  countMessages!:number;


  // money = localStorage.getItem('user_mooney');
  provider_id: any;
  user!: any;
  open:any = false;
  user_id = localStorage.getItem('user_id');
  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
    private data: DataService,
    private providerService: ProviderService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.isLogin();
    this.getMessageUser();
    this.getUser();
    // console.log(localStorage.getItem('token'));

    this.user = localStorage.getItem('user');
    this.user.avatar = `${environment.base_Url_img}${this.user.avatar}`;
  }

  logOut() {
    this.userService.logout().subscribe({
      next: () => {
        // this.toastr.success('Logout successful!');
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
      this.user = this.data.currentUser.subscribe((user) => {
        this.user = user;
        this.user.avatar = `${environment.base_Url_img}${this.user.avatar}`;

      });
    } else {
      this.check = true;
    }
  }

  requestProvide() {
    console.log(localStorage.getItem('user_id'));
    this.providerService.sendRequest(this.user_id).subscribe({
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
        // console.log(this.user.messages);
      },
      error: (error: any) => {},
    });
  }
  getMessageUser(){
    this.userService.getMessageUser(localStorage.getItem('user_id')).subscribe({
      next: (res: any) => {
        this.messages = res;
        this.countMessages = Object.keys(this.messages).length;
        console.log(this.countMessages);

        console.log(this.user);
      },
      error: (error: any) => {},
    });
  }
clickEvent(){
    this.open = !this.open;
}
}
