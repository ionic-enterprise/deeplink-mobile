import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-puer',
  templateUrl: './puer.page.html',
  styleUrls: ['./puer.page.scss'],
  imports: [IonicModule],
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
