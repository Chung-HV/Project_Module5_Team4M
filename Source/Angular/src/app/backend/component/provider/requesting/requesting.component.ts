import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-requesting',
  templateUrl: './requesting.component.html',
  styleUrls: ['./requesting.component.css']
})
export class RequestingComponent implements OnInit {
  providers: any[] = [];
  constructor(private userService: UserService,
    private toastr: ToastrService,
  ) {
    this.getRequest();
  }
  ngOnInit(): void {

  }

  getRequest(){
    this.userService.getRequestingProvider().subscribe(
      providers => {
        this.providers = providers;
        console.log(this.providers);
      }
    )
  }
  approveProvider(provider_id: any) {
    this.userService.approveRequest(provider_id).subscribe({
      next: () => {
        this.getRequest();
        this.toastr.success('Bạn xác nhận người dùng thành cộng tác viên');
      }
    });
  }

}
