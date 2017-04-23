import {
  Component,
  OnInit,
} from '@angular/core';

console.log('`Show` component loaded asynchronously');

@Component({
  selector: 'show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  public ngOnInit() {
    console.log('`Show` component - ngOnInit');
  }

}
