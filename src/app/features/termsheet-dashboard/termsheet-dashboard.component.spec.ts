import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsheetDashboardComponent } from './termsheet-dashboard.component';

describe('TermsheetDashboardComponent', () => {
  let component: TermsheetDashboardComponent;
  let fixture: ComponentFixture<TermsheetDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermsheetDashboardComponent]
    });
    fixture = TestBed.createComponent(TermsheetDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
