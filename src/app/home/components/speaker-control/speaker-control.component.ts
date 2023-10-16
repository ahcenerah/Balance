import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speaker-control',
  templateUrl: './speaker-control.component.html',
  styleUrls: ['./speaker-control.component.scss'],
})
export class SpeakerControlComponent  {
  isMuted: boolean = false;
  bassVolume: number = 0;
  midVolume: number = 0;
  trebleVolume: number = 0;
}
