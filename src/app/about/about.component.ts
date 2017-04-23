import {
  Component,
  OnInit
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

console.log('`About` component loaded asynchronously');

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public localState: any;

  constructor(
    public route: ActivatedRoute
  ) {}

  public ngOnInit() {
    console.log('`About` component - ngOnInit');

    this.route
      .data
      .subscribe((data: any) => {
        this.localState = data;
      });

    this.asyncDataWithWebpack();
  }
  private asyncDataWithWebpack() {
    setTimeout(() => {

      System.import('../../assets/mock-data/mock-data.json')
        .then((json) => {
          console.log('async mockData', json);
          this.localState = json;
        });

    });
  }

}
