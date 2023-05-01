import { CommonModule } from '@angular/common';
import { Component, NgZone, OnInit } from '@angular/core';
import { App } from '@capacitor/app';
import { SplashScreen } from '@capacitor/splash-screen';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class AppComponent implements OnInit {
  constructor(private navController: NavController, private zone: NgZone) {}

  ngOnInit() {
    SplashScreen.hide();
    App.addListener('appUrlOpen', (data: { url: string }) => this.zone.run(() => this.handleDeeplink(data.url)));
  }

  private handleDeeplink(link: string) {
    const path = this.getPath(link);
    if (path) {
      this.navController.navigateRoot(['/', path]);
    }
  }

  private getPath(link: string): string {
    const url = new URL(link);
    const paths = url.pathname.split('/');
    return paths[paths.length - 1] || (url.protocol === 'csdldemo:' ? url.hostname : '');
  }
}
