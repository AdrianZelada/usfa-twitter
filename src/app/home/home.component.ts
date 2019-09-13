import { Component, OnInit } from '@angular/core';
import {TwitterService} from '../services/twitter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: Array<any> = [];
  constructor(private twitterService: TwitterService) { }

  ngOnInit() {
    this.users = this.twitterService.getUsers().map((user: any) => {
      user.href = `http://www.twitter.com/${user.screen_name}`;
      return user;
    });
  }

}
