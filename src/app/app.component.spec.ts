import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { NavController } from '@ionic/angular';
import { of } from 'rxjs';

import { Platform } from '@ionic/angular';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { createNavControllerMock } from '../../test/mocks';

describe('AppComponent', () => {
  let deeplinks;
  let navController;
  let platformReadyPromise;
  let platform;
  let splashScreenSpy;
  let statusBarSpy;

  beforeEach(
    waitForAsync(() => {
      deeplinks = jasmine.createSpyObj('Deeplinks', { route: of() });
      navController = createNavControllerMock();
      platformReadyPromise = Promise.resolve();
      platform = jasmine.createSpyObj('Platform', {
        ready: platformReadyPromise,
      });
      splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);
      statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);

      TestBed.configureTestingModule({
        declarations: [AppComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [
          { provide: Deeplinks, useValue: deeplinks },
          { provide: NavController, useValue: navController },
          { provide: StatusBar, useValue: statusBarSpy },
          { provide: SplashScreen, useValue: splashScreenSpy },
          { provide: Platform, useValue: platform },
        ],
      }).compileComponents();
    }),
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize the app', async () => {
    TestBed.createComponent(AppComponent);
    expect(platform.ready).toHaveBeenCalled();
    await platformReadyPromise;
    expect(statusBarSpy.styleDefault).toHaveBeenCalled();
    expect(splashScreenSpy.hide).toHaveBeenCalled();
  });
});
