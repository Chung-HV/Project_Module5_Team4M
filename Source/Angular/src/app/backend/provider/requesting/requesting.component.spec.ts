import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestingComponent } from './requesting.component';

describe('RequestingComponent', () => {
  let component: RequestingComponent;
  let fixture: ComponentFixture<RequestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
