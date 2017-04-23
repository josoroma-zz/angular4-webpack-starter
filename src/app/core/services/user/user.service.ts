import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { User } from '../../interfaces/user';

@Injectable()
export class UserService {
  public users: Observable<User[]>;
  private _users: BehaviorSubject<User[]>;
  private baseUrl: string;
  private dataStore: {
    users: User[]
  };

  constructor(private http: Http) {
    this.baseUrl =  'https://jsonplaceholder.typicode.com';
    this.dataStore = {users: []};
    this._users = <BehaviorSubject<User[]>> new BehaviorSubject([]);
    this.users = this._users.asObservable();
  }

  public all() {
    this.http.get(`${this.baseUrl}/users`)
      .map((response) => response.json())
      .subscribe((data) => {
        this.dataStore.users = data;
        this._users.next(Object.assign({}, this.dataStore).users);
      },
      (error) => {
        console.log('Could not load users.');
      });
  }
}
