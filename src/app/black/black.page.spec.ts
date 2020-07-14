import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavController } from '@ionic/angular';

import { BlackPage } from './black.page';
import { createNavControllerMock } from '../../../test/mocks';

describe('BlackPage', () => {
  let component: BlackPage;
  let fixture: ComponentFixture<BlackPage>;
  let navController;

  beforeEach(async(() => {
    navController = createNavControllerMock();
    TestBed.configureTestingModule({
      declarations: [BlackPage],
      providers: [{ provide: NavController, useValue: navController }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('next', () => {
    it('navigates forward', () => {
      component.next();
      expect(navController.navigateForward).toHaveBeenCalledTimes(1);
      expect(navController.navigateForward).toHaveBeenCalledWith('/dark');
    });
  });

  describe('previous', () => {
    it('navigates back', () => {
      component.previous();
      expect(navController.navigateBack).toHaveBeenCalledTimes(1);
      expect(navController.navigateBack).toHaveBeenCalledWith('/oolong');
    });
  });
});
