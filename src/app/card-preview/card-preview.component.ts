import {Component, Input, OnInit} from '@angular/core';
import {UserTwitter} from '../services/users-twitter';

@Component({
  selector: 'app-card-preview',
  templateUrl: './card-preview.component.html',
  styleUrls: ['./card-preview.component.scss']
})
export class CardPreviewComponent implements OnInit {
  @Input() user: any = {};
  icons: any = {
    menu: 'fa fa-bars',
    load: 'fa fa-spin-fast',
    arrow: 'fa fa-arrow-left',
  };
  iconState: string = 'menu';

  showContent: boolean =false;
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.showContent = !this.showContent;
    this.iconState = 'load';
    if (this.showContent) {
      setTimeout(() => {
        this.iconState = 'arrow';
      }, 800);
    } else {
      setTimeout(() => {
        this.iconState = 'menu';
      }, 800);
    }
  }
}
