import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {
  providers: any[] = [];
  status:any
  currentPage: any

  constructor(private userService: UserService,
    private toastr: ToastrService,
  ) {
    this.userService.getAllProviders().subscribe(
      providers => {
        this.providers = providers.data;
        console.log(this.providers);
      }
    )
  }
  ngOnInit(): void {
  }

  setVip(provider_id:any){
    this.userService.setVip(provider_id).subscribe({
      next: ()=>{
        this.toastr.success('Đặt tài khoản VIP thành công!');
       },
       error: (error) => {
         console.log(error);
       }
    });

  }

}
