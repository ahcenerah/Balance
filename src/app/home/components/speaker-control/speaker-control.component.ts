import { Component, OnInit } from '@angular/core';
import { Control } from '../../data/control';
import { ControlRepository } from '../../repository/control-repository';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-speaker-control',
  templateUrl: './speaker-control.component.html',
  styleUrls: ['./speaker-control.component.scss'],
})
export class SpeakerControlComponent  implements OnInit {
  control!: Control[];
  bass: number = 0;
  mid: number = 0;
  treble: number = 0;
  speakerOn: boolean = false;
  constructor(private controlRepository: ControlRepository, private route: ActivatedRoute, public title : Title){
    
    this.route.paramMap.subscribe(params => {
      const title = params.get('direction');
      if(title){
        this.title.setTitle(title)
    
      }
    })
  }

  ngOnInit():void {
    this.control = this.controlRepository.control;

    this.bass = this.control[0].bass;
    this.mid = this.control[0].mid;
    this.treble = this.control[0].treble;
    this.speakerOn= this.control[0].speakerOn;
  }
}
