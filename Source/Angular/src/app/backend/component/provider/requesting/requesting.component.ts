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
    this.userService.getRequestingProvider().subscribe(
      providers => {
        this.providers = providers;
        console.log(this.providers);
      }
    )
  }
  ngOnInit(): void {

  }

  approveProvider(provider_id: any) {
    this.userService.approveRequest(provider_id).subscribe({
      next: () => {
        this.toastr.success('Approved');
      }
    });
  }

}
