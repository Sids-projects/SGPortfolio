import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoleJourneyComponent } from './sole-journey.component';

describe('SoleJourneyComponent', () => {
  let component: SoleJourneyComponent;
  let fixture: ComponentFixture<SoleJourneyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoleJourneyComponent]
    });
    fixture = TestBed.createComponent(SoleJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
