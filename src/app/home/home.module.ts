import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { BalanceComponent } from './components/balance/balance.component';
import { VolumeComponent } from './components/volume/volume.component';
import { RightSpeakerComponent } from './components/right-speaker/right-speaker.component';
import { LeftSpeakerComponent } from './components/left-speaker/left-speaker.component';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,BalanceComponent,VolumeComponent,LeftSpeakerComponent,RightSpeakerComponent]
})
export class HomePageModule {}
