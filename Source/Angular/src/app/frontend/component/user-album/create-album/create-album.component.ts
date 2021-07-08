import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Album } from 'src/app/frontend/models/album';
import { AlbumService } from 'src/app/frontend/services/album.service';
import { environment } from 'src/environments/environment.prod';
import { Toast, ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css'],
})
export class CreateAlbumComponent implements OnInit {
  images: string[] = [];
  imageAlbum: string[] =[];
  myForm!: FormGroup;
  user_id!: number;
  album!: Album;

  validateForm() {
    this.myForm = this.fb.group({
      // filePath:[''],
    });
  }

  constructor(private fb: FormBuilder, private albumService: AlbumService,private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getUserId();

  }

  getUserId() {
    this.albumService.profile().subscribe({
      next: (data) => {
        this.user_id = data.id;
        // console.log(this.user_id);
      },
    });
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = (event: any) => {
          // console.log(event.target.result);
          this.images.push(event.target.result);

        };

        reader.readAsDataURL(event.target.files[i]);
        this.imageAlbum.push(event.target.files[i]);
      }
    }
  }

  onSubmited() {
    let formData = new FormData();

    for  (var i =  0; i <  this.imageAlbum.length; i++)  {
      formData.append("files[]",  this.imageAlbum[i]);
  }

    this.albumService.createAlbum(this.user_id,formData).subscribe((res)=>{
      // console.log(res);
      this.toastr.success(
        'Bạn thêm ảnh thành công !', 'Thông báo'
      )
    });





  }
}
