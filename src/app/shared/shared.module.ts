import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbInputModule, NbCardModule, NbListModule, NbIconModule, NbTooltipModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormErrorsComponent } from './components/form-errors/form-errors.component';
import { ImageServerPipe } from './pipes/image-server.pipe';
import { LoaderComponent } from './components/loader/loader.component';

const importExportModules = [
  FormsModule,
  ReactiveFormsModule,
  NbButtonModule,
  NbInputModule,
  NbCardModule,
  NbListModule,
  NbIconModule,
  NbTooltipModule,
]

const importExportDeclarations= [
  FormErrorsComponent,
  ImageServerPipe,
  LoaderComponent,
]

@NgModule({
  declarations: [
    ...importExportDeclarations,
  ],
  imports: [
    CommonModule,
    ...importExportModules
  ],
  exports: [
    ...importExportModules,
    ...importExportDeclarations,
  ]
})
export class SharedModule { }
