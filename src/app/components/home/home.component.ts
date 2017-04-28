import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../../app.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
  public title: string;
  public localState = { value: '' };

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    this.title = 'Home';
  }

  public submitState(value: string) {
    console.log('submitState', value);

    this.appState.set('value', value);
    this.localState.value = '';
  }
}
