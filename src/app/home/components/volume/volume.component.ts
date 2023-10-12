import { Component, Input, Output, EventEmitter,OnInit} from '@angular/core';

@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.scss'],
})
export class VolumeComponent{
  @Input() volume: number;
  @Output() volumeChange = new EventEmitter<number>();
  constructor() {
    this.volume=30;
   }
  onVolumeChange() {
    this.volumeChange.emit(this.volume);
  }
}
