import { Injectable } from '@angular/core';

@Injectable()
export class TitleService {

  public value = 'Home';

  constructor() {
    //
  }

  public get() {
    return this.value;
  }

}
