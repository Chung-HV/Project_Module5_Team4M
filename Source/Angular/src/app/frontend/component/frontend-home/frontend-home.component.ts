import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-frontend-home',
  templateUrl: './frontend-home.component.html',
  styleUrls: ['./frontend-home.component.css'],
})
export class FrontendHomeComponent implements OnInit {
  constructor(private userService: UserService, private router:Router) {}

  ngOnInit(): void {}
  logOut() {
    this.userService.logout().subscribe({
      next:()=>{
        localStorage.clear();
        this.router.navigate(['']);
      },
      error:()=>{

      }
    })
  }
}
