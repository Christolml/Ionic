import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotmailPage } from './hotmail';

@NgModule({
  declarations: [
    HotmailPage,
  ],
  imports: [
    IonicPageModule.forChild(HotmailPage),
  ],
})
export class HotmailPageModule {}
