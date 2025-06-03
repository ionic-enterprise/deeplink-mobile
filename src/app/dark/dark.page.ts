import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-dark',
  templateUrl: './dark.page.html',
  styleUrls: ['./dark.page.scss'],
  imports: [CommonModule, IonicModule],
})
export class DarkPage {
  constructor(private navController: NavController) {}

  previous() {
    this.navController.navigateBack('/black');
  }

  next() {
    this.navController.navigateForward('/puer');
  }
}
