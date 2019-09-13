import {Component, Input, OnInit} from '@angular/core';
import {UserTwitter} from '../services/users-twitter';

@Component({
  selector: 'app-card-preview',
  templateUrl: './card-preview.component.html',
  styleUrls: ['./card-preview.component.scss']
})
export class CardPreviewComponent implements OnInit {
  @Input() user: any = {};


  constructor() { }

  ngOnInit() {
  }

}
