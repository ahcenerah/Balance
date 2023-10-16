import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';


import { IonicModule } from '@ionic/angular';

import { LeftspeakerPageRoutingModule } from './leftspeaker-routing.module';

import { LeftspeakerPage } from './leftspeaker.page';
import { SpeakerControlComponent } from '../home/components/speaker-control/speaker-control.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeftspeakerPageRoutingModule
  ],
  declarations: [LeftspeakerPage,SpeakerControlComponent]
})
export class LeftspeakerPageModule {}
