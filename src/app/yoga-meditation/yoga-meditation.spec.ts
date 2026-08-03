import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaMeditation } from './yoga-meditation';

describe('YogaMeditation', () => {
  let component: YogaMeditation;
  let fixture: ComponentFixture<YogaMeditation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YogaMeditation],
    }).compileComponents();

    fixture = TestBed.createComponent(YogaMeditation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
