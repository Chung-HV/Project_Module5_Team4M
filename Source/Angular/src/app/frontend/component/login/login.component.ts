import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../services/user.service';
// import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    // private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onSubmit () {
    // console.log(this.loginForm.value);
    this.userService.login(this.loginForm.value).subscribe({
      next: (data: any) => {
        localStorage.setItem('token', data.access.token);
        console.log(data.user);
        this.router.navigate(['']);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
