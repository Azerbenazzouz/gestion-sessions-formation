import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieCoverSliderComponent } from './categorie-cover-slider.component';

describe('CategorieCoverSliderComponent', () => {
  let component: CategorieCoverSliderComponent;
  let fixture: ComponentFixture<CategorieCoverSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorieCoverSliderComponent]
    });
    fixture = TestBed.createComponent(CategorieCoverSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
