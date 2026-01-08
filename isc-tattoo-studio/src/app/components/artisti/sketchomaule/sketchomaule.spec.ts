import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sketchomaule } from './sketchomaule';

describe('Sketchomaule', () => {
  let component: Sketchomaule;
  let fixture: ComponentFixture<Sketchomaule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sketchomaule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sketchomaule);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
