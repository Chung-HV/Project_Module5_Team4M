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
  is_provider: any;
  
  is_active!: boolean;
  onOff!: number;

  validateForm() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(30)]],
      birth_day: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      city: ['', [Validators.required, Validators.maxLength(30)]],
      nation: ['', [Validators.required, Validators.maxLength(30)]],
      height: ['', [Validators.pattern(/^[0-9]+$/), Validators.maxLength(10)]],
      weight: ['', [Validators.pattern(/^[0-9]+$/), Validators.maxLength(10)]],
      introducion: ['', [Validators.maxLength(9000)]],
      requirement: ['', [Validators.maxLength(9000)]],
      hobby: ['', [Validators.maxLength(9000)]],
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
    // let data = this.myForm.value;
    // console.log(JSON.stringify(data));

    let formData = new FormData();
    // formData.append('data', data);

    // formData.append('name', this.user.name);
    // formData.append('birth_day', this.user.birth_day);
    // formData.append('gender', this.user.gender);
    // formData.append('city', this.user.city);
    // formData.append('nation', this.user.nation);
    // formData.append('height', this.user.height);
    // formData.append('weight', this.user.weight);
    // formData.append('hobby', this.user.hobby);
    // formData.append('introducion', this.user.introducion);
    // formData.append('requirement', this.user.requirement);
    // formData.append('facebook', this.user.facebook);
    // formData.append('price', this.user.price);
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
      formData.append('avatar', this.avatar, this.avatar.name);
    }
    // console.log(formData.has('city'));

    // console.log(formData.has('facebook'));
    // console.log(formData.has('avatar'));
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

  getUserProfile() {
    this.userService.profile().subscribe({
      next: (data) => {
        this.user = data;

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
        // console.log(this.user.price);

        this.user.avatar = `${environment.base_Url_img}${this.user.avatar}`;
        // this.name = this.user.name;
        // console.log(this.user);
      },
    });
  }

  onSubmit() {
    this.updateProfileUser();
  }

  getImgFile($event: any) {
    this.avatar = $event.target.files[0];
    // console.log(this.avatar);

  }

  requestActive() {
    if (confirm('Bạn có chấp nhận thay đổi trạng thái ')) {
      let statusActive = this.onOff;
      // console.log(statusActive);

      this.userService.isActive(this.id, statusActive).subscribe((res) => {
        // console.log(res);

        this.toastr.success('Changed Succesfully!');
      },
      (res) => {
        this.toastr.error('Change fail. Try again!');
      });
    }
  }

  checkValueActive(event: number) {
    this.onOff = event;
    // console.log(this.onOff);
  }

}
