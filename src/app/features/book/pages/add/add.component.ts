import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookForm } from '../../forms/book.form';
import { Observable, switchMap } from 'rxjs';
import { AuthorService } from '../../services/author.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { BookService } from '../../services/book.service';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @ViewChild('fileInput')
  fileInput!: ElementRef

  authors!: any[]|undefined

  form!: FormGroup

  imageBlob: string|null = null;

  imageExt: string|null = null;

  imageChangedEvent: any = '';

  imageToDisplay: string|null|undefined = null;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authorService: AuthorService,
    private readonly bookService: BookService,
    private readonly toastr: NbToastrService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({...BookForm});

    this.form.get('authorName')?.valueChanges
      .pipe(switchMap(v => this.authorService.findByKeyWord(v.replace(/(.*) /g, ''))))
      .subscribe(authors => this.authors = authors);
  }

  submit() {
    if(this.form.invalid) {
      return;
    }
    
    const values = { 
      ...this.form.value, 
      authorId: this.authors?.find(a => this.formatAuthor(a) === this.form.value.authorName).id,
      imageBlob: this.imageBlob,
      imageExt: this.imageExt,
    }

    this.bookService.post(values).subscribe({
      next: book => {
        this.router.navigate(['book', 'index']);
        this.toastr.success('Cool !!!');
      },
      error: xhr => {
        this.toastr.danger(xhr.error);
      }
    })
  }

  formatAuthor(a: any) {
    return '(' + a.id + ') ' + a.name;
  } 

  // onFileChange(event: any) {
  //   if(event.target.files.length) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(event.target.files[0]);
  //     reader.onload = ({ target }) => {
  //       const parts = (<string>target?.result).split(',');
  //       this.imageBlob = parts[1];
  //       this.imageExt = parts[0].split(';')[0].replace('data:image/', '');
  //     }
  //   }
  // }

  onFileChange(event: any) {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    const parts = (<string>event.base64).split(',');
    this.imageBlob = parts[1];
    this.imageExt = parts[0].split(';')[0].replace('data:image/', '');
    this.imageToDisplay = event.base64;
  }

  browse() {
    this.fileInput.nativeElement.click();
  }
}
