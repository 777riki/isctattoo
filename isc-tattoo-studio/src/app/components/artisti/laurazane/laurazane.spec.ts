import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Laurazane } from './laurazane';

describe('Laurazane', () => {
  let component: Laurazane;
  let fixture: ComponentFixture<Laurazane>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Laurazane]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Laurazane);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
