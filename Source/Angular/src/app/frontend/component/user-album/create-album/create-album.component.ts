import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AlbumService } from 'src/app/frontend/services/album.service';
@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css'],
})
export class CreateAlbumComponent implements OnInit {
  images: string[] = [];
  myForm!: FormGroup;
  // validateForm() {
  //   this.myForm = this.fb.group({
  //     // filePath:[''],
  //   });
  // }
  constructor(private fb: FormBuilder,private userService: AlbumService,) {}

  ngOnInit(): void {
    this.getUserId();
  }

  getUserId() {
    this.userService.profile().subscribe({
      next: (data) => {
        console.log(data.id);
  },
    });
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = (event: any) => {
          console.log(event.target.result);
          this.images.push(event.target.result);

          this.myForm.patchValue({
            fileSource: this.images,
          });
        };

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  onSubmit() {
    console.log(this.myForm.value);
    this.myForm
  }
}
