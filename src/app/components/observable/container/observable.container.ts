import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import { User } from '../../../core/models/user';

@Component({
  selector: 'observable-container',
  templateUrl: './observable.container.html',
  styleUrls: ['./observable.container.css']
})
/*
 * Presentation Component
 * The responsibility of this component is purely to present the data to the
 * user and not to fetch it from a particular location or source.
 */
export class ObservableContainerComponent implements OnInit {
  @Input() public users: User[];

  constructor() {
    //
  }

  public ngOnInit() {
    console.log('`Observable Container Component` - ngOnInit');
  }
}
