import { Injectable } from '@angular/core';
import { Settings } from '../data/settings';
import { SettingsRepository } from './settings-repository';
@Injectable({
  providedIn: 'any'
})
export class SettingsRepositoryDummyImplService extends SettingsRepository{
  public get settings(): Settings[] {
    return [
      {
        volume: 20,
        balance: 0,
        leftSpeakerMuted: false,
        rightSpeakerMuted: false,

      }
    ]
  }
}
