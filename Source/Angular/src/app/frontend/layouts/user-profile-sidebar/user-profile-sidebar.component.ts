import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-profile-sidebar',
  templateUrl: './user-profile-sidebar.component.html',
  styleUrls: ['./user-profile-sidebar.component.css'],
})
export class UserProfileSidebarComponent implements OnInit {
  user: any;
  is_service_provider: any;
  active_info: boolean = false;
  active_album: boolean = false;
  active_service: boolean = false;
  active_rent: boolean = false;
  active_rented: boolean = false;
  user_id: any = localStorage.getItem('user_id');
  constructor(private userService: UserService) {
    this.getUser();
  }

  ngOnInit(): void {}

  getUser() {
    this.userService.getById(this.user_id).subscribe({
      next: (user) => {
        this.user = user;
        this.is_service_provider = this.user.is_service_provider;
      },
    });
  }
  clickInforUser() {
    this.active_album = false;
    this.active_service = false;
    this.active_rent = false;
    this.active_rented = false;
    this.active_info = true;
  }
  clickAlbumUser() {
    this.active_info = false;
    this.active_service = false;
    this.active_rent = false;
    this.active_album = true;
    this.active_rented = false;
  }
  clickServiceUser() {
    this.active_info = false;
    this.active_album = false;
    this.active_rent = false;
    this.active_rented = false;
    this.active_service = true;

  }
  clickRentUser() {
    this.active_info = false;
    this.active_album = false;
    this.active_service = false;
    this.active_rented = false;
    this.active_rent = true;
  }
  clickRentedUser() {
    this.active_rented = true;
    this.active_info = false;
    this.active_album = false;
    this.active_service = false;
    this.active_rent = false;
  }

}
