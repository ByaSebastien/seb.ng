import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { IndexComponent } from './pages/index/index.component';
import { AddComponent } from './pages/add/add.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImageCropperModule } from 'ngx-image-cropper';


@NgModule({
  declarations: [
    BookComponent,
    IndexComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    SharedModule,
    ImageCropperModule,
  ]
})
export class BookModule { }
