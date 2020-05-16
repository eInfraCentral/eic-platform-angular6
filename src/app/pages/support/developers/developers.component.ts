
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as util from 'util';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-developers',
    templateUrl: './developers.component.html',
    styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {
    public project = environment.projectName;
    externalReference = 'https://docs.google.com/forms/d/1WOQDx2wRZRiw9jlA8l1A54tMki8FwUV8fs9iXO_kcmg';


  constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.fragment.subscribe(fragment => this.scrollTo('#' + fragment));
        document.getElementById('contactLink').setAttribute ('href', this.externalReference);
    }

    scrollTo(selector: string) {
        const element = document.querySelector(selector);
        if (element) {
            // element.scrollIntoView(element);
            // element.scrollIntoView();
            element.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
        }
    }

    getModifiedURL(p) {
        return util.format('%s//%s%s', window.location.protocol, window.location.hostname, p != null ? ':' + p : '');
    }
}
