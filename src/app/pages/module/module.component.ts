import {
  Component,
  OnInit,
} from '@angular/core';

console.log('`Module` component loaded asynchronously');

@Component({
  selector: 'module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  public ngOnInit() {
    console.log('`Module` component - ngOnInit');
  }

}
