import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-puer',
  templateUrl: './puer.page.html',
  styleUrls: ['./puer.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class PuerPage {
  constructor(private navController: NavController) {}

  previous() {
    this.navController.navigateBack('/dark');
  }

  next() {
    this.navController.navigateForward('/herbal');
  }
}
