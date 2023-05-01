import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NavController } from '@ionic/angular';
import { createNavControllerMock } from '../../../test/mocks';
import { GreenPage } from './green.page';

describe('GreenPage', () => {
  let component: GreenPage;
  let fixture: ComponentFixture<GreenPage>;
  let navController: NavController;

  beforeEach(waitForAsync(() => {
    navController = createNavControllerMock();
    TestBed.configureTestingModule({
      imports: [GreenPage],
      providers: [{ provide: NavController, useValue: navController }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenPage);
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
      expect(navController.navigateForward).toHaveBeenCalledWith('/oolong');
    });
  });

  describe('previous', () => {
    it('navigates back', () => {
      component.previous();
      expect(navController.navigateBack).toHaveBeenCalledTimes(1);
      expect(navController.navigateBack).toHaveBeenCalledWith('/yellow');
    });
  });
});
