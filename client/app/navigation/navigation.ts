/**
 * Created by SHumiC on 13.07.2016.
 */

import {Component, Input} from '@angular/core';
import {MdButton} from '@angular2-material/button'
import {DROPDOWN_DIRECTIVES} from 'ng2-bs-dropdown';

interface INav {
    label: string,
    href: string,
    description: string,
    iner?: INav[]
}

@Component({
    selector: 'navigation',
    template:  `<div>NAVIGATION</div>
<button>dfdf</button>
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle vertical-letter" type="button" id="dropdownMenu1">
    n
    a
    v
    g
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
    <a class="dropdown-item" href="#">Action</a><br>
    <a class="dropdown-item" href="#">Another action</a><br>
    <a class="dropdown-item" href="#">Something else here</a><br>
  </div>
</div>
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
  <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li><a href="#">HTML</a></li>
    <li><a href="#">CSS</a></li>
    <li><a href="#">JavaScript</a></li>
  </ul>
</div>
 
                `,
    styles: [`
    .vertical-letter {
    white-space: pre;
    }
    `],
    directives: [DROPDOWN_DIRECTIVES]
})

export class Navigation {

    @Input () navItem: INav[] =
        [
            {
                "label": "Dashboard",
                "href": "dashboard",
                "description": "go to dashboard",
                "iner": [
                    {
                        "label": "Device Manager",
                        "href": "manager/device",
                        "description": "go to device manager"
                    },
                    {
                        "label": "Content Manager",
                        "href": "manager/content",
                        "description": "go to content manager"
                    }
                ]
            },
            {
                "label": "Device Manager",
                "href": "manager/device",
                "description": "go to device manager",
                "iner": [
                    {
                        "label": "Device Manager",
                        "href": "manager/device",
                        "description": "go to device manager"
                    },
                    {
                        "label": "Content Manager",
                        "href": "manager/content",
                        "description": "go to content manager"
                    }
                ]
            },
            {
                "label": "Content Manager",
                "href": "manager/content",
                "description": "go to content manager"
            },
            {
                "label": "Playlist Manager",
                "href": "manager/playlist",
                "description": "go to playlist manager"
            },
            {
                "label": "Layout Assembler",
                "href": "layout",
                "description": "go to layout assembler"
            },
            {
                "label": "Publish Schedule",
                "href": "publish",
                "description": "go to publish schedule"
            },
            {
                "label": "Configuration",
                "href": "configuration",
                "description": "go to configuration"
            },
            {
                "label": "Support",
                "href": "support",
                "description": "go to support"
            }
        ]
        ;

}