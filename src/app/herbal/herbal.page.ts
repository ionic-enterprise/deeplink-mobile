import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-herbal',
  templateUrl: './herbal.page.html',
  styleUrls: ['./herbal.page.scss'],
  imports: [IonicModule],
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
