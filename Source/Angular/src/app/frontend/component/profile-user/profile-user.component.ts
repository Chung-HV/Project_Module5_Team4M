import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment.prod';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css'],
})
export class ProfileUserComponent implements OnInit {
  id!: number;
  user!: User;
  avatar!: any;
  myForm!: FormGroup;
  is_active!:number;
  onOff:any;



  validateForm() {
    this.myForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z ]+$/),
          Validators.maxLength(30),
        ],
      ],
      birth_day: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      city: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z ]+$/),
          Validators.maxLength(30),
        ],
      ],
      nation: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z ]+$/),
          Validators.maxLength(30),
        ],
      ],
      height: [ [Validators.pattern(/^[0-9]+$/), Validators.maxLength(10)]],
      weight: [ [Validators.pattern(/^[0-9]+$/), Validators.maxLength(10)]],
      introducion: [[Validators.maxLength(50)]],
      requirement: [ [Validators.maxLength(50)]],
      hobby: [ [Validators.maxLength(30)]],
      facebook: [ [Validators.maxLength(30)]],
      // avatar: [''],
    });
  }

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getUserProfile();
    this.validateForm();
  }

  getUserProfile() {
    this.userService.profile().subscribe({
      next: (data) => {
        this.user = data;
        this.id = this.user.id;
        this.is_active = this.user.is_active;
        // console.log(this.user.is_active);

        this.user.avatar = `${environment.base_Url_img}${this.user.avatar}`;
        // this.name = this.user.name;
        // console.log(this.user);
      },
    });
  }

  updateProfileUser() {
    // let data = this.myForm.value;
    console.log(this.user.city);


    let formData = new FormData();


    formData.append('name', this.user.name);
    formData.append('birth_day', this.user.birth_day);
    formData.append('gender', this.user.gender);
    formData.append('city', this.user.city);
    formData.append('nation', this.user.nation);
    formData.append('height', this.user.height);
    formData.append('weight', this.user.weight);
    formData.append('hobby', this.user.hobby);
    formData.append('introducion', this.user.introducion);
    formData.append('requirement', this.user.requirement);
    formData.append('facebook', this.user.facebook);

    if (this.avatar) {
      formData.append('avatar', this.avatar, this.avatar.name);
    }
    console.log(formData.has('city'));

    console.log(formData.has('facebook'));
    console.log(formData.has('avatar'));
    this.userService.updateUserProfile(this.id, formData).subscribe(
      (res) => {

        //   this.router.navigate(['admin/book-list']);
        this.toastr.success('Upload successfully!', 'Notification');
        // formData.delete('city');

        // }
      },
      (error) => {
        this.toastr.error('Upload fail!', 'Notification');
      }
    );
  }


  onSubmit() {
    this.updateProfileUser();
  }

  getImgFile($event: any) {
    this.avatar = $event.target.files[0];
    // console.log(this.avatar);
  }

  fieldsChange(values:any):void {
    console.log(values.currentTarget.checked);
    if(values.currentTarget.checked == true)
    {
        this.is_active = 1;
        this.onOff = this.is_active;
        // console.log(this.onOff );
        this.toastr.success('Account active!', 'Notification');

    }else
    {
      this.is_active = 0;
      this.onOff = this.is_active;
      this.toastr.error('Account is not active!', 'Notification');

      // console.log(this.onOff  );

    }
  }

  requestActive(){

    this.userService.isActive(this.id,this.onOff).subscribe(
      (res) => {
          console.log(res);

      },
      (error) => {

      }
    );
  }
}
