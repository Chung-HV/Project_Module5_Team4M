import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConfirmBoxInitializer, DialogLayoutDisplay } from '@costlydeveloper/ngx-awesome-popup';
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
  is_provider: any;
  is_service_provider:any;
  isShowOleImage = true;
  is_active!: boolean;
  onOff!: number;
  base_Url_img = `${environment.base_Url_img}`;
  imgSrc = '';

  validateForm() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(30)]],
      birth_day: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      city: ['', [Validators.required, Validators.maxLength(15)]],
      nation: ['', [Validators.required, Validators.maxLength(30)]],
      height: ['', [Validators.pattern(/^[0-9]+$/), Validators.maxLength(10)]],
      weight: ['', [Validators.pattern(/^[0-9]+$/), Validators.maxLength(10)]],
      introducion: ['', [Validators.maxLength(225)]],
      requirement: ['', [Validators.maxLength(225)]],
      hobby: ['', [Validators.maxLength(225)]],
      facebook: ['', [Validators.maxLength(100)]],
      price: ['', [Validators.pattern(/^[0-9]+$/), Validators.maxLength(20)]],

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

  updateProfileUser() {

    let formData = new FormData();

    formData.append('name', this.myForm.get('name')?.value);
    formData.append('birth_day', this.myForm.get('birth_day')?.value);

    formData.append('gender', this.myForm.get('gender')?.value);

    formData.append('city', this.myForm.get('city')?.value);

    formData.append('nation', this.myForm.get('nation')?.value);

    formData.append('height', this.myForm.get('height')?.value);

    formData.append('weight', this.myForm.get('weight')?.value);
    formData.append('hobby', this.myForm.get('hobby')?.value);

    formData.append('introducion', this.myForm.get('introducion')?.value);

    formData.append('requirement', this.myForm.get('requirement')?.value);

    formData.append('facebook', this.myForm.get('facebook')?.value);
    formData.append('price', this.myForm.get('price')?.value);

    if (this.avatar) {
      formData.append('avatar', this.avatar);
    }

    this.userService.updateUserProfile(this.id, formData).subscribe(
      {
        next: (res) => {
          // thong bao thanh cong
          if(res.status === 'success'){
            this.toastr.success('Cập nhật thành công!','Thông báo');
          }
        },
        error: () => {
          this.toastr.error('Cập nhật thất bại!','Thông báo');
        }
      }
    );
  }

  getUserProfile() {
    this.userService.profile().subscribe({
      next: (data) => {
        this.user = data;
        this.is_service_provider = this.user.is_service_provider;
        this.avatar = this.user.avatar;
        this.myForm.patchValue({
          name: this.user.name,
          birth_day: this.user.birth_day,
          gender: this.user.gender,
          city: this.user.city,
          nation: this.user.nation,
          price: this.user.price,
          height: this.user.height,
          weight: this.user.weight,
          hobby: this.user.hobby,
          introducion: this.user.introducion,
          requirement: this.user.requirement,
          facebook: this.user.facebook,
        });
        this.id = this.user.id;
        this.is_active = this.user.is_active;

        this.user.avatar = `${environment.base_Url_img}${this.user.avatar}`;

      },
    });
  }

  onSubmit() {
    this.updateProfileUser();
  }

  getImgFile($event: any) {
    // this.avatar = $event.target.files[0];
    // console.log(this.avatar);
    const reader = new FileReader();
    if ($event.target.files.length && $event.target.files) {
      this.avatar = $event.target.files[0];
      // console.log(this.imgFile);

      reader.readAsDataURL($event.target.files[0]);
      reader.onload = (e: any) => {
        this.imgSrc = e.target.result;
        this.isShowOleImage = false;
      };
    }
  }
  requestActive() {

      let statusActive = this.onOff;

      this.userService.isActive(this.id, statusActive).subscribe(
        (res) => {
          // console.log(res);

          this.toastr.success('Thay đổi thành công!');
        },
        (res) => {
          this.toastr.error('Thay đổi thất bại!');
        }
      );


  }

  checkValueActive(event: number) {
    this.onOff = event;
    // console.log(this.onOff);
  }

  get getControl() {
    return this.myForm.controls;
  }
}
