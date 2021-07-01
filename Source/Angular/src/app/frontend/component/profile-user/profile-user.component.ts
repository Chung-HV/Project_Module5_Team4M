import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {

  id!:number;
  user!: User;
  avatar!:File;
  myForm = this.fb.group({

    name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/), Validators.maxLength(30)]],
    birth_day: ['', [Validators.required, Validators.pattern(/^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g
    )]],

    gender: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/), Validators.maxLength(5)]],
    city: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/), Validators.maxLength(30)]],
    nation: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/), Validators.maxLength(30)]],
    height: ['', [ Validators.pattern(/^[0-9]+$/), Validators.maxLength(10)]],
    weight: ['', [ Validators.pattern(/^[0-9]+$/), Validators.maxLength(10)]],
    introducion: ['', [  Validators.maxLength(50)]],
    requirement: ['', [  Validators.maxLength(50)]],

    hobby: ['', [  Validators.maxLength(30)]],
    facebook: ['', [ Validators.maxLength(30)]],
    avatar: ['' ,[Validators.pattern(/(.png|.jpg)/),Validators.maxLength(100)]],

  })


  constructor(private userService:UserService,private route: ActivatedRoute, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getUserProfile();
    // const data = new FormData();
    // console.log(data.append('image', this.user.avatar));

  }

  getUserProfile()
  {
    this.userService.profile()
      .subscribe({
        next: (data)=>{
          this.user = data;
          this.id = this.user.id;
          this.user.avatar = `${environment.base_Url_img}${this.user.avatar}`;
          console.log(this.user);

        }
      });
  }
  updateProfileUser() {
    this.getUserProfile();

    this.userService.updateUserProfile(this.id,this.myForm.value)
      .subscribe(data => {
        // console.log(data);

      }, error => console.log(error));
      // console.log(this.user);

  }

  onSubmit(){
    this.updateProfileUser();
  }

  // getImgFile($event: any) {
  //   this.avatar = $event.target.files[0];
  //   console.log(this.avatar);

  // }
}
