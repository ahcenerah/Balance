import { Injectable } from '@angular/core';
import { ControlRepository } from './control-repository';
import { Control } from '../data/control';

@Injectable({
  providedIn: 'any'
})
export class ControlRepositoryImplService extends ControlRepository{
  public get control():Control[] {
    return [
      {
        bass:0,
        mid:0,
        treble:0,
        speakerOn:true,
      }
    ]
  }
}

