import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['attach', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    this.items.push({
        title: 'Öğrenci Belgesi',
        icon: this.icons[0]
    });
    this.items.push({
        title: 'Transkript',
        icon: this.icons[0]
    });
    this.items.push({
        title: 'Harç Belgesi',
        icon: this.icons[0]
    });
    this.items.push({
        title: 'Geçici Mezuniyet Belgesi',
        icon: this.icons[0]
    });
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
