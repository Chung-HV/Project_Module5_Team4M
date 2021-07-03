import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { UserDashboard } from '../../models/userDashboard';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-provider-detail',
  templateUrl: './provider-detail.component.html',
  styleUrls: ['./provider-detail.component.css']
})
export class ProviderDetailComponent implements OnInit {
  users!:any;
  price!:number;
  message = '';
  time = 0.5;
  constructor(private homeService: HomeService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.message = '';
    this.getUser(this.route.snapshot.paramMap.get('id'));
  }
  getUser(id:any){
    this.homeService.getUser(id).subscribe(
      data => {
        this.users = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
}
