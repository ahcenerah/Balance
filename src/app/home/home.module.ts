import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { SettingsComponent } from './components/settings/settings.component';
import { HomePageRoutingModule } from './home-routing.module';
import { SettingsRepository } from './repository/settings-repository';
import { SettingsRepositoryDummyImplService } from './repository/settings-repository-dummy-impl.service';
import { SpeakerControlComponent } from './components/speaker-control/speaker-control.component';
import { ControlRepository } from './repository/control-repository';
import { ControlRepositoryImplService } from './repository/control-repository-impl.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,SettingsComponent,SpeakerControlComponent],
  providers:[{
    provide:SettingsRepository,
    useClass:SettingsRepositoryDummyImplService
  },{
  provide:ControlRepository,
  useClass:ControlRepositoryImplService
  }]}
  )
export class HomePageModule {}
