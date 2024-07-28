import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPreviewComponent } from './component-preview.component';

describe('ComponentPreviewComponent', () => {
  let component: ComponentPreviewComponent;
  let fixture: ComponentFixture<ComponentPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentPreviewComponent]
    });
    fixture = TestBed.createComponent(ComponentPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
