import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieFormationsComponent } from './categorie-formations.component';

describe('CategorieFormationsComponent', () => {
  let component: CategorieFormationsComponent;
  let fixture: ComponentFixture<CategorieFormationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorieFormationsComponent]
    });
    fixture = TestBed.createComponent(CategorieFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
