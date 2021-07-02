import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../models/user';

@Component({
  selector: 'app-frontend-home',
  templateUrl: './frontend-home.component.html',
  styleUrls: ['./frontend-home.component.css'],
})
export class FrontendHomeComponent implements OnInit {
  // user = localStorage.getItem('user');
  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  logOut() {
    this.userService.logout().subscribe({
      next: () => {
        this.toastr.success('Logout successful!');
        localStorage.clear();
        this.router.navigate(['']);
      },
      error: () => {},
    });
  }
}
