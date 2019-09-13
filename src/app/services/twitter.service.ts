import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {UserTwitter} from './users-twitter';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {
  users: Array<string> = [];
  keyLocal: string = 'twitter-user';
  constructor() { }

  getUsers() {
    return UserTwitter;
  }

  userFromLocal() {
    const users = localStorage.getItem(this.keyLocal);
    return users ? JSON.parse(users) : [];
  }

  editUserLocal(ind: any ,name: string) {
    this.users = this.users.map((data, index) => {
      return ind === index ? data : name;
    });
    localStorage.setItem(this.keyLocal, JSON.stringify(this.users));
  }

}
