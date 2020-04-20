import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForWomanCategoriesComponent } from './for-woman-categories.component';

describe('ForWomanCategoriesComponent', () => {
  let component: ForWomanCategoriesComponent;
  let fixture: ComponentFixture<ForWomanCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForWomanCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForWomanCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
