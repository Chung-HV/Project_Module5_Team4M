import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrdersComponent } from './customer-orders.component';

describe('CustomerOrdersComponent', () => {
  let component: CustomerOrdersComponent;
  let fixture: ComponentFixture<CustomerOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
