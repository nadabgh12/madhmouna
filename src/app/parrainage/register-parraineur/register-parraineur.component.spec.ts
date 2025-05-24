import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterParraineurComponent } from './register-parraineur.component';

describe('RegisterParraineurComponent', () => {
  let component: RegisterParraineurComponent;
  let fixture: ComponentFixture<RegisterParraineurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterParraineurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterParraineurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
