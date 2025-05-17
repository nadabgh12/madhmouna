import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFemmesComponent } from './dashboard-femmes.component';

describe('DashboardFemmesComponent', () => {
  let component: DashboardFemmesComponent;
  let fixture: ComponentFixture<DashboardFemmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardFemmesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardFemmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
