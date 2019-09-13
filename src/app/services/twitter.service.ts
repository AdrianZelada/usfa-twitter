import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {UserTwitter} from './users-twitter';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor() { }

  getUsers() {
    return UserTwitter;
  }

}
