import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RightspeakerPageRoutingModule } from './rightspeaker-routing.module';

import { RightspeakerPage } from './rightspeaker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RightspeakerPageRoutingModule
  ],
  declarations: [RightspeakerPage]
})
export class RightspeakerPageModule {}
