import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDishesPage } from './main-dishes.page';

describe('MainDishesPage', () => {
  let component: MainDishesPage;
  let fixture: ComponentFixture<MainDishesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDishesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDishesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
