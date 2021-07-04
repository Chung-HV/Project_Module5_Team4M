import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private data: DataService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.userService.login(this.loginForm.value).subscribe({
      next: (data: any) => {
        localStorage.setItem('user_price', data.user.price);
        // localStorage.setItem('user_mooney', data.user.accounts.mooney);
        localStorage.setItem('token', data.access.token);
        localStorage.setItem('user_id', data.user.id);
        this.data.changeCheck(false);
        this.data.changeMoney(data.user.accounts.mooney);
        this.toastr.success("Chào " + data.user.name + "", "Thông Báo");
        this.router.navigate(['']);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
    // window.location.reload();
  }
}
