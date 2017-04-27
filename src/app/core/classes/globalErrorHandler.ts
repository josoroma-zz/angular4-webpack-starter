import {
  ErrorHandler,
  Injectable,
  Injector
} from '@angular/core';

import {
  LocationStrategy,
  PathLocationStrategy
} from '@angular/common';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private injector: Injector
  ) {
    //
  }

  public handleError(error) {
    console.log('==================== handleError ====================');

    // Rethrow the error otherwise it gets swallowed
    throw error;
  }

}
