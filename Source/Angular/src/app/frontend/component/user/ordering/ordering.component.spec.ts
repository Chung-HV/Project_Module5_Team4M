import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OderingComponent } from './ordering.component';

describe('OderingComponent', () => {
  let component: OderingComponent;
  let fixture: ComponentFixture<OderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OderingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
