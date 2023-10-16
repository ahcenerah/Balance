import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RightspeakerPage } from './rightspeaker.page';

describe('RightspeakerPage', () => {
  let component: RightspeakerPage;
  let fixture: ComponentFixture<RightspeakerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RightspeakerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
