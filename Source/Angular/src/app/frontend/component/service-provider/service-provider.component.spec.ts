import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderComponent } from './service-provider.component';

describe('ServiceProviderComponent', () => {
  let component: ServiceProviderComponent;
  let fixture: ComponentFixture<ServiceProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
