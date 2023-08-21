import { Component, ViewChild } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { FormBuilder } from '@angular/forms'
import { FileUpload } from 'primeng/fileupload'; 
import {IWhatsAppForm,IMediaFile} from '../helper-service/helper-service'
import {RecordingEvents } from 'ngx-mic-recorder';
@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent {

  whatsAppForm:FormGroup<IWhatsAppForm>;
  
  @ViewChild('micRecorder') micRecorder: any;

  recording: boolean = false;
  audioBlob: Blob | null = null;
  recordingStartTime: number | null = null;
  recordingTime: number = 0;
  maxRecordingTime: number = 150; // 2 minutes and 30 seconds (in seconds)


  constructor(private fb: FormBuilder){
    this.whatsAppForm = this.fb.group<IWhatsAppForm>({
      phoneNumber: new FormControl(null, Validators.required),
      textMessage: new FormControl(null, Validators.required),
      mediaFiles:this.fb.group<IMediaFile>({
        audio: new FormControl(null), 
        photo: new FormControl(null), 
        video: new FormControl(null),  
      })
    });
  }


  onFileChange(event:{ files: File[] }, fileType: 'audio' | 'photo' | 'video') {
    const selectedFiles: File[] = event.files;
  
    if (selectedFiles.length > 0) {
      this.whatsAppForm.get(`mediaFiles.${fileType}`)?.setValue(selectedFiles[0]);
    }
  }
  
  
  onSubmit(){
    if(this.whatsAppForm.invalid){
      return
    }
    let formData =new FormData();
    let values= this.whatsAppForm.value;
    for (const field in values){
      if(values.hasOwnProperty(field)){
        formData.append(field,values[field as keyof typeof values] as string)
      }
    }

    formData.forEach((values:any,key)=>{
      console.log(`${key}:`,values);
    })

  }


  startRecording() {
    this.recording = true;
    this.recordingStartTime = Date.now();
    this.updateRecordingTime();
  }

  stopRecording() {
    this.recording = false;
    // Handle stopping recording if needed
  }

  updateRecordingTime() {
    if (this.recording && this.recordingStartTime !== null) {
      const currentTime = Date.now();
      this.recordingTime = Math.floor(
        (currentTime - this.recordingStartTime) / 1000
      );
      if (this.recordingTime <= this.maxRecordingTime) {
        setTimeout(() => {
          this.updateRecordingTime();
        }, 1000);
      } else {
        this.stopRecording();
      }
    }
  }

  onRecordingComplete(event:any) {
    console.log(event, 'record-events');
    this.audioBlob = event.srcElement;
    // this.whatsAppForm.get('audio')?.setValue(this.audioBlob);
  }

}
