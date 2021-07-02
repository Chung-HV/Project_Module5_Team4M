import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-provider-detail',
  templateUrl: './provider-detail.component.html',
  styleUrls: ['./provider-detail.component.css'],
})
export class ProviderDetailComponent implements OnInit {
  users!: any;
  price!: number;
  user_id:any =localStorage.getItem('user_id');

  message = '';
  constructor(
    private fb: FormBuilder,
    private homeService: HomeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  orderForm = new FormGroup({
    price: new FormControl(),
    start_at: new FormControl(),
    time: new FormControl(),
    address: new FormControl(),
  });

  ngOnInit(): void {
    this.message = '';
    this.getUser(this.route.snapshot.paramMap.get('id'));
   // console.log(localStorage.getItem('user_id'));
  }
  getUser(id: any) {
    this.homeService.getUser(id).subscribe(
      (data) => {
        this.users = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    console.log(this.orderForm.value);
  }
}
