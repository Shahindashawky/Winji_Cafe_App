import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertPage } from './dessert.page';

describe('DessertPage', () => {
  let component: DessertPage;
  let fixture: ComponentFixture<DessertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DessertPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DessertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
