import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../../app.service';

@Component({
  selector: 'module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {
  public title: string;
  public localState = { value: '' };

  constructor(
    public appState: AppState
  ) {
    //
  }

  public ngOnInit() {
    console.log('`Module` component - ngOnInit');

    this.title = 'Module';
  }

  public submitState(value: string) {
    console.log('submitState', value);

    this.appState.set('value', value);
    this.localState.value = '';
  }
}
