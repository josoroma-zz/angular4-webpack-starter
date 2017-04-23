import {
  Component,
  OnInit,
} from '@angular/core';

console.log('`Page` component loaded asynchronously');

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  public ngOnInit() {
    console.log('`Page` component - ngOnInit');
  }

}
