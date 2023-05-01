import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NavController } from '@ionic/angular';
import { createNavControllerMock } from '../../../test/mocks';
import { DarkPage } from './dark.page';

describe('DarkPage', () => {
  let component: DarkPage;
  let fixture: ComponentFixture<DarkPage>;
  let navController: NavController;

  beforeEach(waitForAsync(() => {
    navController = createNavControllerMock();
    TestBed.configureTestingModule({
      imports: [DarkPage],
      providers: [{ provide: NavController, useValue: navController }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkPage);
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
      expect(navController.navigateForward).toHaveBeenCalledWith('/puer');
    });
  });

  describe('previous', () => {
    it('navigates back', () => {
      component.previous();
      expect(navController.navigateBack).toHaveBeenCalledTimes(1);
      expect(navController.navigateBack).toHaveBeenCalledWith('/black');
    });
  });
});
