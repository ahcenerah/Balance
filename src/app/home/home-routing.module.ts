import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { SettingsComponent } from './components/settings/settings.component';
import { SpeakerControlComponent } from './components/speaker-control/speaker-control.component';

const routes: Routes = [
  { path: 'setting', component: SettingsComponent},
  { path: 'speaker-control', component: SpeakerControlComponent},
  { path : '', redirectTo : 'setting', pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
