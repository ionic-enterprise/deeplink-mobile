import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-white',
  templateUrl: 'white.page.html',
  styleUrls: ['white.page.scss'],
  imports: [CommonModule, IonicModule],
})
export class WhitePage {
  constructor(private navController: NavController) {}

  previous() {
    this.navController.navigateBack('/herbal');
  }

  next() {
    this.navController.navigateForward('/yellow');
  }
}
