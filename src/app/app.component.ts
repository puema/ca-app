import { Component } from "@angular/core";
import { MdIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app works!';

  constructor (private mdIconRegistry : MdIconRegistry) {
    mdIconRegistry.addSvgIconSet('/assets/icons.svg');
  }
}
