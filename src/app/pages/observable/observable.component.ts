import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { User } from './user';
import { UserService } from './user.service';

console.log('`Observable` component loaded asynchronously');

@Component({
  selector: 'observable',
  providers: [UserService],
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {
  public localState: any;

  public errorMessage: string;
  public users: User[];
  public userSubscription: any;

  constructor(
    public route: ActivatedRoute,
    private userService: UserService
  ) {}

  public ngOnInit() {
    console.log('`Observable` component - ngOnInit');

    this.getUsers();
  }

  public ngOnDestroy() {
    console.log('`Observable` component - ngOnDestroy');

    this.userSubscription.unsubscribe();
  }

  public getUsers() {
    this.userSubscription = this.userService.get().subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        this.users = [];
        console.log('error =>', error);
      }
    );
  }
}
