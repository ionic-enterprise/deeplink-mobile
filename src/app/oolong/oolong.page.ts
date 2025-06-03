import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-oolong',
  templateUrl: './oolong.page.html',
  styleUrls: ['./oolong.page.scss'],
  imports: [IonicModule],
})
export class OolongPage {
  constructor(private navController: NavController) {}

  previous() {
    this.navController.navigateBack('/green');
  }

  next() {
    this.navController.navigateForward('/black');
  }
}
