/**
 * Created by SHumiC on 13.07.2016.
 */

import {Component, Input} from '@angular/core';
import {MdButton} from '@angular2-material/button'
import { MDL } from '../directives/mdl';

interface INav {
    label: string,
    href: string,
    description: string,
    iner?: INav[]
}

@Component({
    selector: 'navigation',
    template:  `<div>NAVIGATION</div>
<md-button>Flat button</md-button>
<button md-button="" class="md-button">Button</button>
<button class="mdl-button mdl-js-button"> Flat button </button>
<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
  Raised button with ripple
</button>
<button class="mdl-button mdl-js-button mdl-button--fab">
  <i class="material-icons">add</i>
</button>
<button class="mdl-button mdl-js-button" disabled>Disabled</button>
 <md-menu-bar>
        <md-menu>
          <md-button type="button" class="md-icon-button" ng-click="$mdOpenMenu()" aria-label="Share">
              <md-icon md-svg-icon="share"></md-icon>
          </md-button>
          <md-menu-content width="4">
              <md-menu-item >
                <a >SDfsdf</a>
              </md-menu-item>
              <md-menu-item>
                <a >SDfsdf</a>
              </md-menu-item>
              <md-menu-item >
                <a >SDfsdf</a>
              </md-menu-item>
              <md-menu-item>
                <a >SDfsdf</a>
              </md-menu-item>
          </md-menu-content>
     </md-menu>
        </md-menu-bar>
        
        <!-- Left aligned menu below button -->
<button id="demo-menu-lower-left"
        class="mdl-button mdl-js-button mdl-button--icon">
  <i class="material-icons">more_vert</i>
</button>

<ul class="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect"
    for="demo-menu-lower-left">
  <li class="mdl-menu__item">Some Action</li>
  <li class="mdl-menu__item mdl-menu__item--full-bleed-divider">Another Action</li>
  <li disabled class="mdl-menu__item">Disabled Action</li>
  <li class="mdl-menu__item">Yet Another Action</li>
</ul>
                `,
    styles: [],
    directives: [MDL]
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