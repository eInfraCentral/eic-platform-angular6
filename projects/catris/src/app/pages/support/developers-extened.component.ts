import {Component, OnInit} from '@angular/core';
import {DevelopersComponent} from '../../../../../../src/app/pages/support/developers/developers.component';

@Component({
  selector: 'app-developers',
  templateUrl: '../../../../../../src/app/pages/support/developers/developers.component.html',
  styleUrls: ['../../../../../../src/app/pages/support/developers/developers.component.css']
})

export class DevelopersExtendedComponent extends DevelopersComponent implements OnInit {

  ngOnInit() {
    this.externalReference = 'mailto:tech-support@catris.eu';
    super.ngOnInit();
  }

}
