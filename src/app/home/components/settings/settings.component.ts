import { Component, OnInit } from '@angular/core';
import { SettingsRepository } from '../../repository/settings-repository';
import { Settings } from '../../data/settings';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent  implements OnInit {
  constructor(private settingsRepository: SettingsRepository, private router:Router,private route:ActivatedRoute){}
  
  settings!: Settings[];
  volume: number = 0;
  balance: number = 0;
  leftSpeakerMuted: boolean = false;
  rightSpeakerMuted: boolean = false;

  ngOnInit():void {
    this.settings=this.settingsRepository.settings;
    const settingsdata = this.settings[0];
    this.volume = settingsdata.volume;
    this.balance = settingsdata.balance;
    this.leftSpeakerMuted = settingsdata.leftSpeakerMuted;
    this.rightSpeakerMuted = settingsdata.rightSpeakerMuted;
    }

    onLeftSpeakerToggleChange() {
      if(this.leftSpeakerMuted==true){
        this.balance=-4;
      }
      
      
    }
    onRightSpeakerToggleChange() {
      if(this.rightSpeakerMuted==true){
        this.balance=4;
      }
      
      
    }
    onBalanceChange(){
      if(this.balance==4){
        this.rightSpeakerMuted=true;
        this.leftSpeakerMuted=false;
      }else if(this.balance==-4){
        this.leftSpeakerMuted=true;
        this.rightSpeakerMuted=false;
      }
    }
    navigateToRight(){
      const direction = 'Right Speaker';
      this.router.navigate(['../speaker-control',{direction: direction}],{relativeTo:this.route})
    }
    navigateToLeft(){
      const direction = 'Left Speaker';
      this.router.navigate(['../speaker-control',{direction: direction}],{relativeTo:this.route})
    }
  }
