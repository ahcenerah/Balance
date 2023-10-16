import { ComponentFixture, TestBed,async } from '@angular/core/testing';
import { LeftspeakerPage } from './leftspeaker.page';

describe('LeftspeakerPage', () => {
  let component: LeftspeakerPage;
  let fixture: ComponentFixture<LeftspeakerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LeftspeakerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
