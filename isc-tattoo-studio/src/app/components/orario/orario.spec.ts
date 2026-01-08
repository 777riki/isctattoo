import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orario } from './orario';

describe('Orario', () => {
  let component: Orario;
  let fixture: ComponentFixture<Orario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Orario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Orario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
