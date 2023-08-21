import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { ApiServiceService } from './api-service.service';
import { SharedModule } from './shared/shared.module';
import { NgxMicRecorderService } from 'ngx-mic-recorder';



@NgModule({
  declarations: [
    AppComponent,
    SendMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgxMicRecorderService
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
