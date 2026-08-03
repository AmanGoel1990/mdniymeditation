import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreathingMeditation } from './breathing-meditation';

describe('BreathingMeditation', () => {
  let component: BreathingMeditation;
  let fixture: ComponentFixture<BreathingMeditation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreathingMeditation],
    }).compileComponents();

    fixture = TestBed.createComponent(BreathingMeditation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
