import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Isc } from './isc';

describe('Isc', () => {
  let component: Isc;
  let fixture: ComponentFixture<Isc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Isc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Isc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
