import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  providers: any[] = [];
  status:any
  constructor(private userService: UserService,
    private toastr: ToastrService,
  ) {
    this.userService.getAllProviders().subscribe(
      providers => {
        this.providers = providers;
        console.log(this.providers);
      }
    )
  }
  ngOnInit(): void {
  }

  setVip(provider_id:any){
    this.userService.setVip(provider_id).subscribe({
      next: ()=>{
        this.toastr.success('set VIP successful!');
       },
       error: (error) => {
         console.log(error);
       }
    });

  }

}
