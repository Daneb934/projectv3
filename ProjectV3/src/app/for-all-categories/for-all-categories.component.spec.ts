import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForAllCategoriesComponent } from './for-all-categories.component';

describe('ForAllCategoriesComponent', () => {
  let component: ForAllCategoriesComponent;
  let fixture: ComponentFixture<ForAllCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForAllCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForAllCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
