import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-right-speaker',
  templateUrl: './right-speaker.component.html',
  styleUrls: ['./right-speaker.component.scss'],
})
export class RightSpeakerComponent {
  constructor() {}

  @Input() rightSpeakerMuted: boolean = false;
  @Output() rightSpeakerMutedChange = new EventEmitter<boolean>();

  onRightSpeakerMutedChange() {
    // Inversez l'état actuel du haut-parleur droit
    this.rightSpeakerMuted = !this.rightSpeakerMuted;

    // Émettez l'état actuel du haut-parleur droit en utilisant le EventEmitter
    this.rightSpeakerMutedChange.emit(this.rightSpeakerMuted);
  }
}
