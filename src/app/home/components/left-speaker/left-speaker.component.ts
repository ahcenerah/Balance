import { Component,Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-left-speaker',
  templateUrl: './left-speaker.component.html',
  styleUrls: ['./left-speaker.component.scss'],
})
export class LeftSpeakerComponent  {


  @Input() leftSpeakerMuted: boolean = false;
  @Output() leftSpeakerMutedChange = new EventEmitter<boolean>();
  constructor(private router: Router) {}

  goToLeftSpeaker() {
    this.router.navigate(['/leftspeaker']);
      }
}
