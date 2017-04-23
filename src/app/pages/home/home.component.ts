import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../../app.service';

import { TitleService } from '../../core/services/title';
import { XLargeDirective } from '../../core/directives/x-large';

@Component({
  selector: 'home',
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    TitleService
  ],
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
  public title: string;
  public localState = { value: '' };

  constructor(
    public appState: AppState,
    public titleService: TitleService
  ) {}

  public ngOnInit() {
    console.log('`Home` component - ngOnInit');

    this.title = this.titleService.get();
  }

  public submitState(value: string) {
    console.log('submitState', value);

    this.appState.set('value', value);
    this.localState.value = '';
  }
}
