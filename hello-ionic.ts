import { Component } from '@angular/core';
import { ListPage } from '../list/list';
import { NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  onClick() {
    this.navCtrl.push(ListPage);
  }
}
