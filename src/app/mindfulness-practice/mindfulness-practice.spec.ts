import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindfulnessPractice } from './mindfulness-practice';

describe('MindfulnessPractice', () => {
  let component: MindfulnessPractice;
  let fixture: ComponentFixture<MindfulnessPractice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MindfulnessPractice],
    }).compileComponents();

    fixture = TestBed.createComponent(MindfulnessPractice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
