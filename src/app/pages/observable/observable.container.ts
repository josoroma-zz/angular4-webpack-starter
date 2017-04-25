import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import { User } from '../../core/interfaces/user';

console.log('`Observable Container Component` loaded asynchronously');

@Component({
  selector: 'observable-container',
  templateUrl: './observable.container.html',
  styleUrls: ['./observable.container.css']
})
export class ObservableContainerComponent implements OnInit {
  @Input() public user: User;

  constructor() {
    //
  }

  public ngOnInit() {
    console.log('`Observable Container Component` - ngOnInit');
  }
}
