import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfilioComponent } from './portfilio.component';

describe('PortfilioComponent', () => {
  let component: PortfilioComponent;
  let fixture: ComponentFixture<PortfilioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfilioComponent]
    });
    fixture = TestBed.createComponent(PortfilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
