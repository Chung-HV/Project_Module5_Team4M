import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../models/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-frontend-home',
  templateUrl: './frontend-home.component.html',
  styleUrls: ['./frontend-home.component.css'],
})
export class FrontendHomeComponent implements OnInit {
  @Input()
  check: any= this.data.currentCheck.subscribe(check =>this.check=check);
  // user = localStorage.getItem('user');
  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
    private data: DataService,
  ) {
  }

  ngOnInit(): void {
    this.isLogin();
    console.log(localStorage.getItem('token'));

  }

  logOut() {
    this.userService.logout().subscribe({
      next: () => {
        this.toastr.success('Logout successful!');
        localStorage.clear();
        this.data.changeCheck(true);
        // this.data.currentCheck.subscribe(check =>this.check=check)
        window.location.reload();
        // this.router.navigate(['']);
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
}
