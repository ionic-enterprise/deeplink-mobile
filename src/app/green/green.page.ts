import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-green',
  templateUrl: './green.page.html',
  styleUrls: ['./green.page.scss'],
  imports: [CommonModule, IonicModule],
})
export class GreenPage {
  constructor(private navController: NavController) {}

  previous() {
    this.navController.navigateBack('/yellow');
  }

  next() {
    this.navController.navigateForward('/oolong');
  }
}
