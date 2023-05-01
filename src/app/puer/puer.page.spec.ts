import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NavController } from '@ionic/angular';
import { createNavControllerMock } from '../../../test/mocks';
import { PuerPage } from './puer.page';

describe('PuerPage', () => {
  let component: PuerPage;
  let fixture: ComponentFixture<PuerPage>;
  let navController: NavController;

  beforeEach(waitForAsync(() => {
    navController = createNavControllerMock();
    TestBed.configureTestingModule({
      imports: [PuerPage],
      providers: [{ provide: NavController, useValue: navController }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuerPage);
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
      expect(navController.navigateForward).toHaveBeenCalledWith('/herbal');
    });
  });

  describe('previous', () => {
    it('navigates back', () => {
      component.previous();
      expect(navController.navigateBack).toHaveBeenCalledTimes(1);
      expect(navController.navigateBack).toHaveBeenCalledWith('/dark');
    });
  });
});
