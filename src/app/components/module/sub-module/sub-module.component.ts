import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'sub-module',
  templateUrl: './sub-module.component.html',
  styleUrls: ['./sub-module.component.css']
})
export class SubModuleComponent implements OnInit {

  public ngOnInit() {
    console.log('`SubModule` component - ngOnInit');
  }

}
