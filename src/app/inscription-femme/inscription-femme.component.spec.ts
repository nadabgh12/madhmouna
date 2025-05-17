import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionFemmeComponent } from './inscription-femme.component';

describe('InscriptionFemmeComponent', () => {
  let component: InscriptionFemmeComponent;
  let fixture: ComponentFixture<InscriptionFemmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscriptionFemmeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionFemmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
