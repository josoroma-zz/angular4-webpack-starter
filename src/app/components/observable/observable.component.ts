import {
  Component,
  OnInit
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { User } from '../../core/models/user';

import { UserService } from '../../core/services/user';

@Component({
  selector: 'observable',
  providers: [ UserService ],
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
/*
 * Smart Component
 *
 * This component still knows how to retrieve the users list from a service,
 * and what type of list this is.
 *
 * But this component does not know how to present the users list to the user.
 *
 */
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

  public getUsers(): any {
    // Subscribe to entire collection
    this.users = this.userService.users;
    // Load all users
    this.userService.all();
  }
}
