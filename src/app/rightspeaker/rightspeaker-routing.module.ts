import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RightspeakerPage } from './rightspeaker.page';

const routes: Routes = [
  {
    path: '',
    component: RightspeakerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RightspeakerPageRoutingModule {}
