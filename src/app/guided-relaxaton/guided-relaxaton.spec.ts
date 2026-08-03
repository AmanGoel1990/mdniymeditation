import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidedRelaxaton } from './guided-relaxaton';

describe('GuidedRelaxaton', () => {
  let component: GuidedRelaxaton;
  let fixture: ComponentFixture<GuidedRelaxaton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuidedRelaxaton],
    }).compileComponents();

    fixture = TestBed.createComponent(GuidedRelaxaton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
