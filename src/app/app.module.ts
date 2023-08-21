import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { ApiServiceService } from './api-service.service';
import { SharedModule } from './shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
    SendMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
