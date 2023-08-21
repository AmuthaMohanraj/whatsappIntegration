import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendMessageComponent } from './send-message/send-message.component';

const routes: Routes = [
  {path:'send-Message',component:SendMessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
