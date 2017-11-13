import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatFilterComponent } from './cat-filter.component';

describe('CatFilterComponent', () => {
  let component: CatFilterComponent;
  let fixture: ComponentFixture<CatFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
