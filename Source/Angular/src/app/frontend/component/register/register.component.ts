import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../services/user.service';
// import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  userForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/), Validators.maxLength(30)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/), Validators.maxLength(16)]],
    password_confirmation: [''],
  }, { validators: this.checkPassword() });

  constructor(
    // private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {  }

  ngOnInit(): void {
  }

  checkPassword(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password')?.value;
      const confirmPassword = control.get('password_confirmation')?.value;
      return password === confirmPassword ? null : { notSame: true };
    };
  }
  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }
    // console.log(this.userForm.value)

    this.userService.register(this.userForm.value).subscribe({
       next: () => {
        // this.showSuccess();
        this.router.navigate(['frontend/login'])
       },
       error: (error) => {
         console.log(error);
       }
    });
  }

  // showSuccess() {
  //   this.toastr.success('Register successful!');
  // }
}
