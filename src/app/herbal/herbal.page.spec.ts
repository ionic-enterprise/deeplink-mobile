import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NavController } from '@ionic/angular';
import { createNavControllerMock } from '../../../test/mocks';
import { HerbalPage } from './herbal.page';

describe('HerbalPage', () => {
  let component: HerbalPage;
  let fixture: ComponentFixture<HerbalPage>;
  let navController: NavController;

  beforeEach(waitForAsync(() => {
    navController = createNavControllerMock();
    TestBed.configureTestingModule({
      imports: [HerbalPage],
      providers: [{ provide: NavController, useValue: navController }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerbalPage);
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
      expect(navController.navigateForward).toHaveBeenCalledWith('/white');
    });
  });

  describe('previous', () => {
    it('navigates back', () => {
      component.previous();
      expect(navController.navigateBack).toHaveBeenCalledTimes(1);
      expect(navController.navigateBack).toHaveBeenCalledWith('/puer');
    });
  });
});
