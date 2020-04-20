import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceMenuComponent } from './advice-menu.component';

describe('AdviceMenuComponent', () => {
  let component: AdviceMenuComponent;
  let fixture: ComponentFixture<AdviceMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdviceMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviceMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
