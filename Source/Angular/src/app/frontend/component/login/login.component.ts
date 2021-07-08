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
import { User } from '../../models/user';

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
  user!: any;

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
        localStorage.setItem('token', data.access.token);
        localStorage.setItem('user_id', data.user.id);
        this.data.changeCheck(false);
        this.data.getCurentUser(data.user);
        this.router.navigate(['']);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
    // window.location.reload();
  }
}
