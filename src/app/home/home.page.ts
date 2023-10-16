import { Component } from '@angular/core';
import { BalanceComponent } from './components/balance/balance.component';
import { VolumeComponent } from './components/volume/volume.component';
import { RightSpeakerComponent } from './components/right-speaker/right-speaker.component';
import { LeftSpeakerComponent } from './components/left-speaker/left-speaker.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}
  volume: number = 0;
  balance: number = 0;
  leftSpeakerMuted: boolean = false;
  rightSpeakerMuted: boolean = false;

  onVolumeChange(newVolume: number) {
    // Logique pour gérer le changement de volume
    this.volume = newVolume;
  }

  onBalanceChange(newBalance: number) {
    // Logique pour gérer le changement de balance
    this.balance = newBalance;
  }

  onLeftSpeakerMutedChange() {
    this.balance = this.leftSpeakerMuted ? 4 : 0;
  }

  onRightSpeakerMutedChange() {
    this.balance = this.rightSpeakerMuted ? -4 : 0;  }
  
  goToRightSpeaker() {
    this.router.navigate(['/rightspeaker']);
    }
  goToLeftSpeaker() {
    this.router.navigate(['/lefttspeaker']);
      }
}
