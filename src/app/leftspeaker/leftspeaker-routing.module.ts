import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeftspeakerPage } from './leftspeaker.page';

const routes: Routes = [
  {
    path: '',
    component: LeftspeakerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeftspeakerPageRoutingModule {}
