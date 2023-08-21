import {FormControl, FormGroup} from '@angular/forms';

export interface IMediaFile {
    audio: FormControl<File | FileList | null>;
    photo: FormControl<File | FileList | null>;
    video: FormControl<File | FileList | null>;
  }
  
 export interface IWhatsAppForm{
    phoneNumber:FormControl<null>
    textMessage:FormControl<null>
    mediaFiles:FormGroup<IMediaFile>;
  }