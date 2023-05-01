import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-herbal',
  templateUrl: './herbal.page.html',
  styleUrls: ['./herbal.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class HerbalPage {
  constructor(private navController: NavController) {}

  previous() {
    this.navController.navigateBack('/puer');
  }

  next() {
    this.navController.navigateForward('/white');
  }
}
