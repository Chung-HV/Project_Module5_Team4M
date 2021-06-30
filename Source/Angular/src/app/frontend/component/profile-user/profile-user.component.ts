import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {

  id!:number;
  user!: User
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  updateProfileUser() {
    this.userService.updateUserProfile(this.id, this.user)
      .subscribe(data => {
        console.log(data);
        this.user = new User();
        // this.gotoList();
      }, error => console.log(error));
  }

  onSubmit(){
    this.updateProfileUser();
  }
}
