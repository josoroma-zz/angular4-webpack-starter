import {
  Component,
  OnInit
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { User } from '../../core/interfaces/user';
import { UserService } from '../../core/services/user/user.service';

console.log('`Observable` component loaded asynchronously');

@Component({
  selector: 'observable',
  providers: [ UserService ],
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  public localState: any;

  public errorMessage: string;
  public users: Observable<User[]>;

  constructor(
    public route: ActivatedRoute,
    private userService: UserService
  ) {}

  public ngOnInit() {
    console.log('`Observable` component - ngOnInit');

    this.getUsers();
  }

  public getUsers() {
    // Subscribe to entire collection
    this.users = this.userService.users;
    // Load all users
    this.userService.all();
  }
}
