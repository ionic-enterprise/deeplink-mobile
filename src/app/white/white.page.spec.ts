import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NavController } from '@ionic/angular';
import { createNavControllerMock } from '../../../test/mocks';
import { WhitePage } from './white.page';

describe('WhitePage', () => {
  let component: WhitePage;
  let fixture: ComponentFixture<WhitePage>;
  let navController: NavController;

  beforeEach(waitForAsync(() => {
    navController = createNavControllerMock();
    TestBed.configureTestingModule({
      imports: [WhitePage],
      providers: [{ provide: NavController, useValue: navController }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhitePage);
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
      expect(navController.navigateForward).toHaveBeenCalledWith('/yellow');
    });
  });

  describe('previous', () => {
    it('navigates back', () => {
      component.previous();
      expect(navController.navigateBack).toHaveBeenCalledTimes(1);
      expect(navController.navigateBack).toHaveBeenCalledWith('/herbal');
    });
  });
});
