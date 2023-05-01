import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-black',
  templateUrl: './black.page.html',
  styleUrls: ['./black.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class BlackPage {
  constructor(private navController: NavController) {}

  previous() {
    this.navController.navigateBack('/oolong');
  }

  next() {
    this.navController.navigateForward('/dark');
  }
}
