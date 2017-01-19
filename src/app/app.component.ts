import { Component } from "@angular/core";
import { MdIconRegistry } from '@angular/material';
import { DomSanitizerImpl } from '@angular/platform-browser/src/security/dom_sanitization_service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app works!';
  iconsFile : string =  './assets/icons.svg';

  constructor (private mdIconRegistry : MdIconRegistry, private sanitizer : DomSanitizerImpl) {
    mdIconRegistry.addSvgIconSet(this.sanitizer.bypassSecurityTrustResourceUrl(this.iconsFile));
    // mdIconRegistry.addSvgIconSet(this.iconsFile);
  }
}
