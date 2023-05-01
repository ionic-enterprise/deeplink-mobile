import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-yellow',
  templateUrl: './yellow.page.html',
  styleUrls: ['./yellow.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class YellowPage {
  constructor(private navController: NavController) {}

  previous() {
    this.navController.navigateBack('/white');
  }

  next() {
    this.navController.navigateForward('/green');
  }
}
