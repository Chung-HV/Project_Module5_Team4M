import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-profile-sidebar',
  templateUrl: './user-profile-sidebar.component.html',
  styleUrls: ['./user-profile-sidebar.component.css']
})

export class UserProfileSidebarComponent implements OnInit {
  user: any;
  is_service_provider:any;
  user_id:any = localStorage.getItem('user_id')
  constructor(
    private userService: UserService
  ) {
    this.getUser();
  }

  ngOnInit(): void {
  }

  getUser(){
    this.userService.getById(this.user_id).subscribe({
      next: user=>{
        this.user = user
        this.is_service_provider=this.user.is_service_provider;

      }
    })
  }
}
