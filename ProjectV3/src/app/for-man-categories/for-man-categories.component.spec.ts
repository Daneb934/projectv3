import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForManCategoriesComponent } from './for-man-categories.component';

describe('ForManCategoriesComponent', () => {
  let component: ForManCategoriesComponent;
  let fixture: ComponentFixture<ForManCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForManCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForManCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
