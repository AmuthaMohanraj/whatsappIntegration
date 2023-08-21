import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { NgxMicRecorderService } from 'ngx-mic-recorder';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    InputTextModule,
    InputTextareaModule,
    FileUploadModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    // NgxMicRecorderService
  ],
  exports:[
    InputTextModule,
    InputTextareaModule,
    FileUploadModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    // NgxMicRecorderService
  ]
})
export class SharedModule { }
