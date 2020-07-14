import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-black',
  templateUrl: './black.page.html',
  styleUrls: ['./black.page.scss'],
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
